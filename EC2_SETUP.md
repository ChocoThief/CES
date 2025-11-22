# EC2 서버 배포 가이드

## 1. EC2 인스턴스 준비

### 사양 권장
- **Instance Type**: t3.medium 이상 (2 vCPU, 4GB RAM)
- **Storage**: 20GB SSD
- **OS**: Ubuntu 22.04 LTS
- **Security Group**:
  - SSH (22) - 본인 IP만
  - HTTP (80) - 0.0.0.0/0
  - HTTPS (443) - 0.0.0.0/0

## 2. 초기 서버 설정

```bash
# SSH 접속
ssh -i your-key.pem ubuntu@your-ec2-ip

# 시스템 업데이트
sudo apt update && sudo apt upgrade -y

# 필수 패키지 설치
sudo apt install -y git curl nginx

# Docker 설치
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker ubuntu

# Docker Compose 설치
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# 재로그인 (docker 그룹 적용)
exit
ssh -i your-key.pem ubuntu@your-ec2-ip
```

## 3. DNS 설정

**Route 53 또는 도메인 등록기관에서:**

| Type | Name | Value |
|------|------|-------|
| A | ceskorea.kr | EC2 Public IP |
| A | www.ceskorea.kr | EC2 Public IP |
| A | admin.ceskorea.kr | EC2 Public IP |
| A | api.ceskorea.kr | EC2 Public IP |

**DNS 전파 확인:**
```bash
nslookup ceskorea.kr
nslookup admin.ceskorea.kr
nslookup api.ceskorea.kr
```

## 4. 프로젝트 클론 및 설정

```bash
# 홈 디렉토리에 프로젝트 클론
cd ~
git clone https://github.com/your-org/CES.git
cd CES

# 환경 변수 설정
cp .env.example .env
nano .env

# .env 파일 편집:
# - DB_PASSWORD: 강력한 비밀번호
# - DB_ROOT_PASSWORD: 강력한 루트 비밀번호
# - JWT_SECRET: 32자 이상 랜덤 문자열
# - AWS_ACCESS_KEY_ID: AWS IAM 키
# - AWS_SECRET_ACCESS_KEY: AWS IAM 시크릿
# - S3_BUCKET: S3 버킷 이름
# - CLOUDFRONT_DOMAIN: CloudFront 도메인 (선택)
```

## 5. Nginx 설치 및 설정

**중요:** SSL은 Application Load Balancer (ALB)와 AWS Certificate Manager (ACM)에서 처리됩니다.
EC2의 Nginx는 ALB로부터 HTTP 트래픽만 받아 Docker 컨테이너로 프록시합니다.

```bash
# Nginx 설정 스크립트 실행
chmod +x setup-nginx.sh
sudo ./setup-nginx.sh
```

## 6. 배포 실행

```bash
# 첫 배포
chmod +x deploy.sh
./deploy.sh

# 로그 확인
docker-compose logs -f

# 서비스 상태 확인
docker-compose ps
```

## 7. 배포 확인

```bash
# EC2에서 로컬 서비스 테스트
curl http://localhost:8080  # Frontend
curl http://localhost:3000  # Admin
curl http://localhost:5000/health  # Backend
```

**ALB를 통한 브라우저 접속 (ACM SSL):**
- Frontend: https://ceskorea.kr
- Admin: https://admin.ceskorea.kr (admin / admin123)
- API: https://api.ceskorea.kr/health

**참고:** SSL 인증서는 ALB에 연결된 ACM에서 관리되며, 자동으로 갱신됩니다.

## 8. 업데이트 배포

```bash
# 코드 업데이트 시
cd ~/CES
git pull origin main
./deploy.sh
```

## 9. 모니터링 및 유지보수

### 로그 확인
```bash
# 전체 로그
docker-compose logs -f

# 특정 서비스 로그
docker-compose logs -f backend
docker-compose logs -f mariadb
docker-compose logs -f admin
docker-compose logs -f frontend
```

### 데이터베이스 백업
```bash
# 백업 생성
docker-compose exec mariadb mysqldump -uces_user -p ces2026 > backup_$(date +%Y%m%d).sql

# 백업 복원
cat backup_20250101.sql | docker-compose exec -T mariadb mysql -uces_user -p ces2026
```

### 컨테이너 재시작
```bash
# 전체 재시작
docker-compose restart

# 특정 서비스만 재시작
docker-compose restart backend
```

### 디스크 정리
```bash
# 사용하지 않는 Docker 리소스 정리
docker system prune -a

# 로그 파일 정리
sudo journalctl --vacuum-time=7d
```

## 10. 보안 강화

### Firewall 설정
```bash
# UFW 활성화
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

### 관리자 비밀번호 변경
```bash
# 컨테이너에 접속
docker-compose exec backend node

# Node REPL에서:
const { AdminUser } = require('./src/models');
const admin = await AdminUser.findOne({ where: { username: 'admin' } });
admin.password = 'new_strong_password';
await admin.save();
```

## 11. 트러블슈팅

### ALB Health Check 실패
```bash
# EC2 보안 그룹 확인: ALB 보안 그룹에서 포트 80 허용되었는지 확인
# Nginx 상태 확인
sudo systemctl status nginx
sudo nginx -t

# 로컬 서비스 확인
curl http://localhost:8080
curl http://localhost:3000
curl http://localhost:5000/health
```

### 502 Bad Gateway 에러
```bash
# 컨테이너 상태 확인
docker-compose ps

# 컨테이너 재시작
docker-compose restart

# Nginx 로그 확인
sudo tail -f /var/log/nginx/error.log
```

### 데이터베이스 연결 실패
```bash
# MariaDB 컨테이너 로그
docker-compose logs mariadb

# MariaDB 재시작
docker-compose restart mariadb
```

### 파일 업로드 실패
```bash
# S3 권한 확인
aws s3 ls s3://your-bucket-name --profile ces

# 환경 변수 확인
docker-compose exec backend env | grep AWS
```

## 12. 성능 최적화

### Nginx 캐싱 (선택사항)
```nginx
# /etc/nginx/sites-available/ceskorea.kr 에 추가
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=1g inactive=60m;

location / {
    proxy_cache my_cache;
    proxy_cache_valid 200 60m;
    # ... 기존 설정
}
```

### Docker 로그 크기 제한
```bash
# /etc/docker/daemon.json 생성
sudo nano /etc/docker/daemon.json
```

```json
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  }
}
```

```bash
sudo systemctl restart docker
```

---

## 요약

1. ✅ EC2 인스턴스 준비 (Ubuntu 22.04)
2. ✅ Docker & Docker Compose 설치
3. ✅ Route 53 DNS 설정 (Alias 레코드 → ALB)
4. ✅ ACM 인증서 발급 (*.ceskorea.kr)
5. ✅ Application Load Balancer 설정 (HTTPS 리스너 + ACM)
6. ✅ 프로젝트 클론 및 .env 설정
7. ✅ Nginx 설치 및 설정 (`./setup-nginx.sh`)
8. ✅ 배포 실행 (`./deploy.sh`)
9. ✅ 서비스 확인 (https://ceskorea.kr)

**기본 관리자 계정:**
- Username: `admin`
- Password: `admin123`
- ⚠️ 첫 로그인 후 반드시 변경!

**자동 업데이트:**
```bash
cd ~/CES && git pull && ./deploy.sh
```
