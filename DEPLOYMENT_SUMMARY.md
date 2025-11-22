# 🚀 CES 2026 배포 요약

## 배포 방식: EC2 + CloudFront + ACM

**아키텍처:**
```
사용자 → Route 53 → CloudFront (ACM SSL) → EC2 (Nginx) → Docker
```

**사양:**
- EC2 t3.medium (2 vCPU, 4GB RAM)
- CloudFront CDN
- ACM 인증서 (무료, 영구, 자동 갱신)
- Nginx 리버스 프록시 (HTTP only)
- Docker + Docker Compose

**비용:** ~$30-35/월 (EC2 $30 + CloudFront $0-5)

**장점:**
- ✅ ACM 무료 SSL 인증서 (영구, 자동 갱신)
- ✅ CloudFront CDN으로 속도 향상
- ✅ DDoS 보호 기본 제공
- ✅ 트래픽 적으면 CloudFront 거의 무료

**상세 가이드:** `CLOUDFRONT_DEPLOYMENT.md` 참고

---

## 빠른 시작

### 1단계: ACM 인증서 발급 (5분)

**중요:** us-east-1 리전에서 발급해야 합니다!

```
AWS Console > Certificate Manager (리전: us-east-1)
> Request certificate

도메인:
- ceskorea.kr
- *.ceskorea.kr

검증: DNS validation
> "Create records in Route 53" 클릭
> 5분 대기 (상태 "Issued" 확인)
```

### 2단계: EC2 준비 (10분)

```bash
# Docker 설치
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker ubuntu

# Docker Compose 설치
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# 재로그인
exit && ssh -i key.pem ubuntu@ec2-ip
```

### 3단계: 프로젝트 배포 (5분)

```bash
git clone https://github.com/your-org/CES.git
cd CES

# .env 설정
cp .env.example .env
nano .env  # AWS 키, DB 비밀번호 입력

# Nginx 설정 (HTTP only)
sudo cp nginx/nginx.conf /etc/nginx/sites-available/ceskorea.kr
sudo ln -s /etc/nginx/sites-available/ceskorea.kr /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl restart nginx

# 배포
chmod +x deploy.sh
./deploy.sh
```

### 4단계: CloudFront Distribution 생성 (10분)

```
CloudFront > Create distribution

Origin:
- Domain: EC2 Public IP 또는 도메인
- Protocol: HTTP only
- Port: 80

Behavior:
- Viewer protocol: Redirect HTTP to HTTPS
- Cache policy: CachingDisabled (동적 사이트)
- Allowed methods: All

Settings:
- Alternate domains: ceskorea.kr, www.ceskorea.kr, admin.ceskorea.kr, api.ceskorea.kr
- SSL certificate: 1단계에서 만든 ACM 인증서 선택
```

### 5단계: Route 53 설정

```
Route 53 > ceskorea.kr > Create record

4개의 A 레코드 생성 (모두 Alias):
- (비워둠) → CloudFront distribution
- www → CloudFront distribution
- admin → CloudFront distribution
- api → CloudFront distribution
```

### 6단계: 접속 확인

```
https://ceskorea.kr
https://admin.ceskorea.kr (admin/admin123)
https://api.ceskorea.kr/health
```

---

## 업데이트 배포

```bash
cd ~/CES
git pull
./deploy.sh
```

---

## 관리자 계정

**기본 계정:**
- Username: `admin`
- Password: `admin123`

**비밀번호 변경:**
```bash
docker-compose exec backend node
```
```javascript
const { AdminUser } = require('./src/models');
(async () => {
  const admin = await AdminUser.findOne({ where: { username: 'admin' } });
  admin.password = '새비밀번호';
  await admin.save();
  console.log('비밀번호 변경 완료');
  process.exit(0);
})();
```

---

## 트러블슈팅

### 502 Bad Gateway
```bash
docker-compose ps  # 컨테이너 상태 확인
docker-compose logs backend  # 로그 확인
docker-compose restart  # 재시작
```

### CloudFront 502 Error
```bash
# EC2에서 서비스 확인
curl http://localhost:8080
curl http://localhost:3000
curl http://localhost:5000/health

# Nginx 확인
sudo nginx -t
sudo systemctl status nginx

# 보안 그룹 확인 (포트 80 열려있는지)
```

### ACM 인증서 오류
```
- us-east-1 리전에서 발급했는지 확인
- 인증서 상태가 "Issued"인지 확인
- CloudFront에 올바른 인증서 연결되었는지 확인
```

### DB 연결 실패
```bash
docker-compose logs mariadb
docker-compose restart mariadb
```

---

## 백업

```bash
# DB 백업
docker-compose exec mariadb mysqldump -uces_user -p ces2026 > backup.sql

# 복원
cat backup.sql | docker-compose exec -T mariadb mysql -uces_user -p ces2026
```

---

## 모니터링

```bash
# 실시간 로그
docker-compose logs -f

# 리소스 사용량
docker stats

# 디스크 사용량
df -h
docker system df
```
