# AWS 배포 가이드 (Route 53 + ACM + ALB)

## 아키텍처

```
Route 53 (DNS)
    ↓
Application Load Balancer (HTTPS with ACM)
    ↓
EC2 Instance (Docker Containers on HTTP)
```

## 1. Route 53 DNS 설정

### A. Hosted Zone 확인
```
Route 53 > Hosted zones > ceskorea.kr
```

### B. A 레코드 생성 (ALB 생성 후)
나중에 ALB 생성 후 Alias 레코드로 설정합니다.

## 2. ACM (AWS Certificate Manager) 인증서 발급

### A. 인증서 요청
```
1. AWS Console > Certificate Manager
2. "Request a certificate" 클릭
3. "Request a public certificate" 선택
4. 도메인 이름 입력:
   - ceskorea.kr
   - *.ceskorea.kr  (와일드카드로 서브도메인 모두 커버)
5. 검증 방법: DNS 검증 선택
6. "Request" 클릭
```

### B. DNS 검증 레코드 추가
```
1. 인증서 상세 페이지에서 "Create records in Route 53" 클릭
2. 자동으로 CNAME 레코드가 Route 53에 추가됨
3. 5-10분 대기 (인증서 상태가 "Issued"로 변경)
```

## 3. Application Load Balancer (ALB) 생성

### A. 타겟 그룹 생성 먼저
```
EC2 > Target Groups > Create target group

기본 설정:
- Target type: Instances
- Target group name: ces-backend-tg
- Protocol: HTTP
- Port: 5000
- VPC: 기본 VPC 선택
- Health check path: /health

Advanced health check:
- Healthy threshold: 2
- Unhealthy threshold: 3
- Timeout: 5
- Interval: 10

"Next" > EC2 인스턴스 선택 > Port 5000 > "Include as pending below" > Create
```

**추가 타겟 그룹들:**

Frontend용:
```
- Name: ces-frontend-tg
- Port: 8080
- Health check: /
```

Admin용:
```
- Name: ces-admin-tg
- Port: 3000
- Health check: /
```

### B. ALB 생성
```
EC2 > Load Balancers > Create Load Balancer > Application Load Balancer

기본 설정:
- Load balancer name: ces-alb
- Scheme: Internet-facing
- IP address type: IPv4

Network mapping:
- VPC: 기본 VPC
- Availability Zones: 최소 2개 선택 (ap-northeast-2a, ap-northeast-2c)

Security groups:
- 새 보안 그룹 생성: ces-alb-sg
  - Inbound: HTTP (80), HTTPS (443) from 0.0.0.0/0

Listeners:
1. HTTP:80 → Redirect to HTTPS
2. HTTPS:443 → Forward to ces-frontend-tg

HTTPS 리스너 설정:
- SSL certificate: 위에서 만든 ACM 인증서 선택

"Create load balancer"
```

### C. 리스너 규칙 설정 (호스트 기반 라우팅)

**HTTPS:443 리스너 편집:**

```
Rules > Add rule

규칙 1 - API:
- Name: api-routing
- Condition: Host header is api.ceskorea.kr
- Action: Forward to ces-backend-tg

규칙 2 - Admin:
- Name: admin-routing
- Condition: Host header is admin.ceskorea.kr
- Action: Forward to ces-admin-tg

규칙 3 - Frontend (기본):
- Name: frontend-routing
- Condition: Host header is ceskorea.kr OR www.ceskorea.kr
- Action: Forward to ces-frontend-tg
```

## 4. Route 53 레코드 업데이트

```
Route 53 > Hosted zones > ceskorea.kr > Create record

레코드 1:
- Record name: (비워둠, apex domain)
- Record type: A
- Alias: Yes
- Route traffic to: Application Load Balancer
- Region: ap-northeast-2
- Load balancer: ces-alb
- Create

레코드 2:
- Record name: www
- Record type: A
- Alias: Yes
- Route traffic to: Application Load Balancer
- ces-alb 선택
- Create

레코드 3:
- Record name: admin
- Record type: A
- Alias: Yes
- ces-alb 선택
- Create

레코드 4:
- Record name: api
- Record type: A
- Alias: Yes
- ces-alb 선택
- Create
```

## 5. EC2 보안 그룹 업데이트

```
EC2 > Security Groups > EC2 인스턴스의 보안 그룹 선택

Inbound rules:
- Type: Custom TCP, Port: 5000, Source: ces-alb-sg (ALB 보안 그룹)
- Type: Custom TCP, Port: 8080, Source: ces-alb-sg
- Type: Custom TCP, Port: 3000, Source: ces-alb-sg
- Type: SSH, Port: 22, Source: 내 IP

Outbound rules:
- All traffic (기본값 유지)
```

## 6. EC2에 배포

### A. 프로젝트 클론
```bash
ssh -i your-key.pem ubuntu@ec2-public-ip

cd ~
git clone https://github.com/your-repo/CES.git
cd CES
```

### B. 환경 변수 설정
```bash
cp .env.example .env
nano .env
```

`.env` 파일:
```bash
# Database
DB_PASSWORD=strong_password_here_123!@#
DB_ROOT_PASSWORD=root_password_here_456!@#

# JWT
JWT_SECRET=your_32_char_random_secret_key_12345678

# AWS S3
AWS_ACCESS_KEY_ID=AKIA...
AWS_SECRET_ACCESS_KEY=...
AWS_REGION=ap-northeast-2
S3_BUCKET=ces2026-files

# CloudFront (optional)
CLOUDFRONT_DOMAIN=files.ceskorea.kr

# URLs (Production)
FRONTEND_URL=https://ceskorea.kr
ADMIN_URL=https://admin.ceskorea.kr
```

### C. Docker 및 Docker Compose 설치
```bash
# Docker 설치
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker ubuntu

# Docker Compose 설치
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# 재로그인
exit
ssh -i your-key.pem ubuntu@ec2-public-ip
```

### D. 배포 실행
```bash
cd ~/CES
chmod +x deploy.sh
./deploy.sh
```

## 7. 배포 확인

### A. 컨테이너 상태 확인
```bash
docker-compose ps
```

### B. Health Check
```bash
# Backend
curl http://localhost:5000/health

# Frontend
curl http://localhost:8080

# Admin
curl http://localhost:3000
```

### C. 브라우저에서 확인
```
https://ceskorea.kr
https://admin.ceskorea.kr (admin / admin123)
https://api.ceskorea.kr/health
```

## 8. CloudFront + S3 파일 업로드 설정 (선택사항)

### A. S3 버킷 생성
```
S3 > Create bucket

Bucket name: ces2026-files
Region: ap-northeast-2
Block public access: OFF (CloudFront에서 접근)

Bucket policy:
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontOAI",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity YOUR_OAI_ID"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::ces2026-files/*"
    }
  ]
}
```

### B. CloudFront Distribution 생성
```
CloudFront > Create distribution

Origin:
- Origin domain: ces2026-files.s3.ap-northeast-2.amazonaws.com
- Origin access: Origin access control (recommended)
- Create new OAC

Default cache behavior:
- Viewer protocol policy: Redirect HTTP to HTTPS
- Allowed HTTP methods: GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE

Settings:
- Alternate domain names (CNAMEs): files.ceskorea.kr
- Custom SSL certificate: 위에서 만든 ACM 인증서 선택

Create distribution
```

### C. Route 53에 CloudFront 레코드 추가
```
Record name: files
Type: A
Alias: Yes
Route traffic to: CloudFront distribution
Select: 위에서 만든 distribution
```

## 9. 업데이트 배포

```bash
cd ~/CES
git pull origin main
./deploy.sh
```

## 10. 모니터링

### CloudWatch 알람 설정
```
CloudWatch > Alarms > Create alarm

메트릭:
- ALB Unhealthy Host Count
- Target Response Time
- HTTP 5XX errors

알림: SNS 토픽으로 이메일 전송
```

---

## 요약 체크리스트

- [ ] Route 53 Hosted Zone 확인
- [ ] ACM 인증서 발급 (*.ceskorea.kr)
- [ ] DNS 검증 완료
- [ ] 타겟 그룹 3개 생성 (backend, frontend, admin)
- [ ] ALB 생성 및 리스너 규칙 설정
- [ ] Route 53 A 레코드 (Alias to ALB)
- [ ] EC2 보안 그룹 업데이트
- [ ] Docker 설치
- [ ] .env 파일 설정
- [ ] ./deploy.sh 실행
- [ ] HTTPS 접속 확인

**비용 (월 예상):**
- EC2 t3.medium: ~$30
- ALB: ~$20
- Route 53: ~$0.50
- ACM: 무료
- 총: ~$50/month
