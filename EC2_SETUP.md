# EC2 서버 배포 가이드 (CloudFront + ACM)

## 1. EC2 인스턴스 준비

### 사양 권장
- **Instance Type**: t3.medium 이상 (2 vCPU, 4GB RAM)
- **Storage**: 20GB SSD
- **OS**: Ubuntu 22.04 LTS
- **Security Group**:
  - SSH (22) - 본인 IP만
  - HTTP (80) - 0.0.0.0/0 (CloudFront에서 접근)

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

## 3. ACM 인증서 발급

**중요: us-east-1 리전에서 발급해야 합니다!**

```
AWS Console > Certificate Manager
리전: US East (N. Virginia) us-east-1

Request certificate:
- ceskorea.kr
- *.ceskorea.kr

Validation: DNS validation
> "Create records in Route 53" 클릭
> 5분 대기 (상태 "Issued" 확인)
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

## 5. Nginx 설정 (HTTP only)

CloudFront가 HTTPS를 처리하므로, EC2는 HTTP만 받습니다.

```bash
# Nginx 설정 복사
sudo cp nginx/nginx.conf /etc/nginx/sites-available/ceskorea.kr
sudo ln -s /etc/nginx/sites-available/ceskorea.kr /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default

# 설정 테스트 및 재시작
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx
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

## 7. CloudFront Distribution 생성

```
CloudFront > Create distribution

Origin:
- Domain: EC2 Public DNS 또는 IP
- Protocol: HTTP only
- HTTP port: 80

Default cache behavior:
- Viewer protocol: Redirect HTTP to HTTPS
- Allowed methods: All (GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE)
- Cache policy: CachingDisabled
- Origin request policy: AllViewer

Settings:
- Alternate domains (CNAMEs):
  * ceskorea.kr
  * www.ceskorea.kr
  * admin.ceskorea.kr
  * api.ceskorea.kr
- Custom SSL certificate: 3단계에서 만든 ACM 인증서

Create distribution
```

## 8. Route 53 설정

```
Route 53 > Hosted zones > ceskorea.kr

4개의 A 레코드 생성 (모두 Alias):
1. Name: (비워둠) → Alias to CloudFront distribution
2. Name: www → Alias to CloudFront distribution
3. Name: admin → Alias to CloudFront distribution
4. Name: api → Alias to CloudFront distribution
```

## 9. 배포 확인

```bash
# EC2에서 로컬 테스트
curl http://localhost:8080
curl http://localhost:3000
curl http://localhost:5000/health
```

**브라우저에서 접속 (CloudFront를 통해):**
- 프론트엔드: https://ceskorea.kr
- 관리자: https://admin.ceskorea.kr (admin / admin123)
- API: https://api.ceskorea.kr/health

**참고:** ACM 인증서는 자동으로 영구 갱신됩니다.

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

### CloudFront 502 Error
```bash
# EC2에서 서비스 확인
curl http://localhost:8080
curl http://localhost:3000
curl http://localhost:5000/health

# Nginx 상태 확인
sudo systemctl status nginx
sudo nginx -t

# 보안 그룹 확인 (포트 80 열려있는지)
```

### ACM 인증서 오류
- us-east-1 리전에서 발급했는지 확인
- 인증서 상태가 "Issued"인지 확인
- CloudFront에 올바른 인증서가 연결되었는지 확인

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
3. ✅ ACM 인증서 발급 (us-east-1, *.ceskorea.kr)
4. ✅ 프로젝트 클론 및 .env 설정
5. ✅ Nginx 설정 (HTTP only)
6. ✅ 배포 실행 (`./deploy.sh`)
7. ✅ CloudFront Distribution 생성
8. ✅ Route 53 A 레코드 (Alias to CloudFront)
9. ✅ 서비스 확인 (https://ceskorea.kr)

**기본 관리자 계정:**
- Username: `admin`
- Password: `admin123`
- ⚠️ 첫 로그인 후 반드시 변경!

**자동 업데이트:**
```bash
cd ~/CES && git pull && ./deploy.sh
```
