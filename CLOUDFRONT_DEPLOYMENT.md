# CloudFront + ACM 배포 가이드

## 아키텍처

```
사용자
  ↓
Route 53 (DNS)
  ↓
CloudFront (HTTPS with ACM 인증서)
  ↓
EC2 (Nginx - HTTP only)
  ↓
Docker 컨테이너들
```

## 장점

- ✅ ACM 인증서 무료 (영구, 자동 갱신)
- ✅ CloudFront CDN으로 속도 향상
- ✅ 트래픽 적으면 거의 무료 (~$0-5/월)
- ✅ DDoS 보호 기본 제공
- ✅ 관리 간편

## 1. ACM 인증서 발급

### A. us-east-1 리전에서 인증서 요청 (중요!)

**주의:** CloudFront는 반드시 **us-east-1(버지니아)** 리전의 ACM 인증서만 사용 가능합니다.

```
1. AWS Console > Certificate Manager
2. 리전을 "US East (N. Virginia) us-east-1"로 변경
3. "Request certificate" 클릭
4. "Request a public certificate" 선택

도메인 이름:
- ceskorea.kr
- *.ceskorea.kr

검증 방법: DNS validation
```

### B. Route 53에서 DNS 검증

```
1. 인증서 상세 페이지에서 "Create records in Route 53" 클릭
2. CNAME 레코드가 자동으로 Route 53에 추가됨
3. 5-10분 대기 (상태가 "Issued"로 변경)
```

## 2. EC2 설정

### A. Nginx 설정 (HTTP만)

CloudFront가 HTTPS를 처리하므로, EC2의 Nginx는 HTTP만 받습니다.

```bash
# EC2 접속
ssh -i your-key.pem ubuntu@ec2-ip

# 프로젝트 클론
git clone https://github.com/your-org/CES.git
cd CES

# 환경 변수 설정
cp .env.example .env
nano .env

# Nginx 설정 복사
sudo cp nginx/nginx-http.conf /etc/nginx/sites-available/ceskorea.kr
sudo ln -s /etc/nginx/sites-available/ceskorea.kr /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default

# Nginx 재시작
sudo nginx -t
sudo systemctl restart nginx

# Docker 배포
./deploy.sh
```

### B. 보안 그룹 설정

```
EC2 Security Group Inbound Rules:
- SSH (22) from 내 IP
- HTTP (80) from 0.0.0.0/0  ← CloudFront에서 오는 트래픽
```

## 3. CloudFront Distribution 생성

### A. Distribution 기본 설정

```
CloudFront > Create distribution

Origin settings:
- Origin domain: EC2 Public IP 또는 도메인 (예: ec2-xx-xx-xx-xx.ap-northeast-2.compute.amazonaws.com)
- Protocol: HTTP only
- HTTP port: 80
```

### B. Default cache behavior

```
Viewer protocol policy: Redirect HTTP to HTTPS
Allowed HTTP methods: GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE
Cache policy: CachingDisabled (동적 사이트이므로)
Origin request policy: AllViewer
```

### C. Settings

```
Alternate domain names (CNAMEs):
- ceskorea.kr
- www.ceskorea.kr
- admin.ceskorea.kr
- api.ceskorea.kr

Custom SSL certificate: 위에서 만든 ACM 인증서 선택 (*.ceskorea.kr)

Default root object: (비워둠)
```

### D. 추가 Origin 설정 (옵션)

더 세밀한 제어를 원하면 Origin을 3개로 나눌 수 있습니다:

**Origin 1: Frontend**
```
Name: ces-frontend
Domain: EC2 IP
Path: (비워둠)
Custom headers:
  Host: ceskorea.kr
```

**Origin 2: Admin**
```
Name: ces-admin
Domain: EC2 IP
Custom headers:
  Host: admin.ceskorea.kr
```

**Origin 3: API**
```
Name: ces-api
Domain: EC2 IP
Custom headers:
  Host: api.ceskorea.kr
```

### E. Behaviors 설정 (호스트 기반 라우팅)

```
Behavior 1 (API):
- Path pattern: /api/*
- Origin: ces-api
- Cache policy: CachingDisabled
- Viewer protocol: Redirect to HTTPS

Behavior 2 (Admin):
- Path pattern: /admin/*
- Origin: ces-admin
- Cache policy: CachingDisabled
- Viewer protocol: Redirect to HTTPS

Default behavior:
- Origin: ces-frontend
- Cache policy: CachingDisabled
- Viewer protocol: Redirect to HTTPS
```

**또는 간단하게:** 단일 Origin 사용하고 Nginx의 Host 헤더로 라우팅

## 4. Route 53 설정

```
Route 53 > Hosted zones > ceskorea.kr

레코드 1:
- Name: (비워둠)
- Type: A
- Alias: Yes
- Route traffic to: CloudFront distribution
- Distribution: 위에서 만든 distribution 선택

레코드 2:
- Name: www
- Type: A
- Alias: Yes
- Route traffic to: CloudFront distribution

레코드 3:
- Name: admin
- Type: A
- Alias: Yes
- Route traffic to: CloudFront distribution

레코드 4:
- Name: api
- Type: A
- Alias: Yes
- Route traffic to: CloudFront distribution
```

## 5. Nginx 설정 (EC2)

CloudFront에서 오는 모든 요청은 HTTP이므로, Nginx는 HTTP만 처리합니다.

`nginx/nginx-http.conf`:

```nginx
# Frontend
server {
    listen 80;
    server_name ceskorea.kr www.ceskorea.kr;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;
    }
}

# Admin
server {
    listen 80;
    server_name admin.ceskorea.kr;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;
    }
}

# API
server {
    listen 80;
    server_name api.ceskorea.kr;

    location / {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;
    }

    client_max_body_size 100M;
}
```

## 6. 배포 및 테스트

### A. 배포

```bash
cd ~/CES
./deploy.sh
```

### B. 로컬 테스트 (EC2에서)

```bash
curl http://localhost:8080  # Frontend
curl http://localhost:3000  # Admin
curl http://localhost:5000/health  # Backend
```

### C. CloudFront 테스트

```bash
# CloudFront distribution domain으로 테스트
curl https://d1234567890.cloudfront.net

# 실제 도메인 테스트 (Route 53 전파 후)
curl https://ceskorea.kr
curl https://admin.ceskorea.kr
curl https://api.ceskorea.kr/health
```

## 7. 캐시 무효화 (Invalidation)

프론트엔드 업데이트 후 CloudFront 캐시를 지우려면:

```bash
# AWS CLI 사용
aws cloudfront create-invalidation \
  --distribution-id E1234567890ABC \
  --paths "/*"

# 또는 AWS Console에서:
# CloudFront > Distributions > Invalidations > Create invalidation
# Paths: /*
```

## 8. 비용 최적화

### A. Cache Policy 설정

정적 파일(이미지, CSS, JS)은 캐싱:

```
Behavior for /static/*:
- Cache policy: CachingOptimized
- TTL: 86400 (1 day)
```

### B. Compression 활성화

```
Default cache behavior:
- Compress objects automatically: Yes
```

## 9. 모니터링

### CloudWatch 메트릭

```
CloudWatch > Metrics > CloudFront

주요 메트릭:
- Requests (요청 수)
- BytesDownloaded (전송량)
- 4xx/5xx Error Rate
```

## 10. 트러블슈팅

### CloudFront에서 502 Error

```bash
# EC2에서 서비스 확인
docker-compose ps
curl http://localhost:8080

# Nginx 로그 확인
sudo tail -f /var/log/nginx/error.log

# 보안 그룹 확인 (포트 80 열려있는지)
```

### HTTPS 인증서 오류

- ACM 인증서가 **us-east-1** 리전에 있는지 확인
- 인증서 상태가 "Issued"인지 확인
- CloudFront Distribution에 올바른 인증서가 연결되었는지 확인

### Route 53 DNS 전파 안됨

```bash
# DNS 전파 확인
nslookup ceskorea.kr
dig ceskorea.kr

# 전파는 최대 48시간 걸릴 수 있음 (보통 5-10분)
```

## 요약 체크리스트

- [ ] ACM 인증서 발급 (us-east-1, *.ceskorea.kr)
- [ ] DNS 검증 완료
- [ ] EC2 인스턴스 준비
- [ ] Docker + Docker Compose 설치
- [ ] 프로젝트 클론 및 .env 설정
- [ ] Nginx HTTP 설정
- [ ] ./deploy.sh 실행
- [ ] CloudFront Distribution 생성
- [ ] Route 53 A 레코드 (Alias to CloudFront)
- [ ] HTTPS 접속 테스트

## 예상 월 비용

```
EC2 t3.medium: ~$30
CloudFront: $0-5 (트래픽에 따라)
Route 53: ~$0.50
ACM: 무료

총: ~$30-35/월
```

Let's Encrypt 대비 비용은 비슷하지만, ACM 영구 인증서 + CDN 속도 향상 + 관리 편의성이 장점입니다.
