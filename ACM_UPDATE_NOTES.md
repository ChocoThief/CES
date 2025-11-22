# ACM/ALB 아키텍처 업데이트 노트

## 변경 사항 요약

Route 53과 AWS Certificate Manager (ACM)를 사용하는 프로덕션 환경에 맞게 배포 스크립트와 설정을 업데이트했습니다.

## 핵심 변경점

### 1. SSL 처리 방식 변경
**이전:** EC2에서 Let's Encrypt 사용
**현재:** Application Load Balancer (ALB)에서 ACM 인증서 사용

**장점:**
- ✅ 무료 SSL 인증서 (ACM)
- ✅ 자동 갱신 (수동 관리 불필요)
- ✅ 고가용성 및 Auto Scaling 가능
- ✅ AWS 통합 모니터링

### 2. 업데이트된 파일

#### `nginx/nginx.conf`
- ❌ 제거: SSL 인증서 경로 (`ssl_certificate`, `ssl_certificate_key`)
- ❌ 제거: HTTPS 리스너 (443 포트)
- ❌ 제거: HTTP → HTTPS 리다이렉트
- ✅ 변경: HTTP (80 포트)만 리스닝
- ✅ 추가: ALB로부터 HTTP 트래픽 수신하는 역할만 수행

```nginx
# 이전 (Let's Encrypt)
server {
    listen 443 ssl http2;
    ssl_certificate /etc/letsencrypt/live/ceskorea.kr/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ceskorea.kr/privkey.pem;
    ...
}

# 현재 (ALB + ACM)
server {
    listen 80;  # ALB가 HTTPS 처리, Nginx는 HTTP만
    server_name ceskorea.kr www.ceskorea.kr;
    ...
}
```

#### `deploy.sh`
- ✅ 업데이트: 출력 메시지에 HTTPS URL 표시
- ✅ 추가: ACM/ALB 아키텍처 안내 메시지
- ✅ 명확화: 로컬 컨테이너 포트와 public URL 구분

#### `setup-nginx.sh` (신규)
- ✅ 생성: Nginx 설정 자동화 스크립트
- ❌ 제거: SSL 설정 관련 코드 (Let's Encrypt, certbot)
- ✅ 단순화: HTTP 리버스 프록시 설정만 수행

#### `setup-ssl.sh` (삭제)
- ❌ 삭제: Let's Encrypt SSL 설정 스크립트
- 이유: ACM이 SSL을 처리하므로 불필요

#### 문서 업데이트
- `README.md`: ACM 아키텍처 반영
- `EC2_SETUP.md`: Let's Encrypt → ACM 가이드 변경
- `DEPLOYMENT_SUMMARY.md`: 빠른 시작 가이드 업데이트
- `AWS_DEPLOYMENT.md`: 이미 ACM 기준으로 작성되어 있음 (변경 없음)

## 아키텍처 비교

### 이전 (Let's Encrypt)
```
User → Route 53 → EC2 (Nginx with Let's Encrypt SSL) → Docker Containers
                  └─ Port 443 HTTPS
                  └─ Port 80 HTTP (redirect to 443)
```

### 현재 (ACM + ALB)
```
User → Route 53 → ALB (ACM SSL 인증서) → EC2 (Nginx) → Docker Containers
                  └─ Port 443 HTTPS       └─ Port 80 HTTP
                  └─ Port 80 HTTP (redirect to 443)
```

## 배포 프로세스 변경

### 이전 배포 순서
1. EC2 인스턴스 생성
2. Docker 설치
3. 프로젝트 클론
4. `setup-ssl.sh` 실행 (Let's Encrypt 인증서 발급)
5. `deploy.sh` 실행

### 현재 배포 순서 (권장)
1. **ACM 인증서 발급** (*.ceskorea.kr)
2. **ALB 생성** 및 타겟 그룹 설정
3. **Route 53 레코드** → ALB Alias
4. EC2 인스턴스 생성
5. Docker 설치
6. 프로젝트 클론
7. `setup-nginx.sh` 실행 (HTTP 프록시만)
8. `deploy.sh` 실행

## 보안 그룹 설정

### EC2 Security Group
```
Inbound Rules:
- SSH (22) from 내 IP
- HTTP (80) from ALB Security Group (중요!)
```

### ALB Security Group
```
Inbound Rules:
- HTTP (80) from 0.0.0.0/0
- HTTPS (443) from 0.0.0.0/0
```

## Health Check 설정

### ALB Target Groups
```
Frontend Target Group (ces-frontend-tg):
- Port: 8080
- Health check: /
- Protocol: HTTP

Admin Target Group (ces-admin-tg):
- Port: 3000
- Health check: /
- Protocol: HTTP

Backend Target Group (ces-backend-tg):
- Port: 5000
- Health check: /health
- Protocol: HTTP
```

## 테스트 방법

### 로컬 테스트 (EC2에서)
```bash
curl http://localhost:8080  # Frontend
curl http://localhost:3000  # Admin
curl http://localhost:5000/health  # Backend
```

### Public 접속 테스트
```bash
curl https://ceskorea.kr
curl https://admin.ceskorea.kr
curl https://api.ceskorea.kr/health
```

## 비용 비교

### Let's Encrypt 방식
- EC2 t3.medium: ~$30/월
- **총: ~$30/월**

### ACM + ALB 방식 (현재)
- EC2 t3.medium: ~$30/월
- ALB: ~$20/월
- Route 53 Hosted Zone: ~$0.50/월
- ACM: **무료**
- **총: ~$50/월**

## 주요 이점

1. **관리 부담 감소**
   - Let's Encrypt: 90일마다 갱신 필요 (자동화 필요)
   - ACM: 완전 자동 갱신

2. **고가용성**
   - Let's Encrypt: 단일 EC2 (SPOF)
   - ACM + ALB: Multi-AZ, Auto Scaling 가능

3. **모니터링**
   - Let's Encrypt: 수동 모니터링
   - ACM + ALB: CloudWatch 통합

4. **인증서 관리**
   - Let's Encrypt: EC2에 파일로 저장
   - ACM: AWS 관리형 서비스

## 다음 단계

1. ✅ ACM 인증서 발급 완료 확인
2. ✅ ALB 생성 및 리스너 규칙 설정
3. ✅ Route 53 Alias 레코드 생성
4. ✅ EC2에서 `./setup-nginx.sh` 실행
5. ✅ `./deploy.sh` 실행
6. ✅ HTTPS 접속 테스트

## 참고 문서

- **상세 AWS 배포 가이드**: [AWS_DEPLOYMENT.md](./AWS_DEPLOYMENT.md)
- **EC2 설정 가이드**: [EC2_SETUP.md](./EC2_SETUP.md)
- **빠른 시작 가이드**: [DEPLOYMENT_SUMMARY.md](./DEPLOYMENT_SUMMARY.md)
