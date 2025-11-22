# 🚀 CES 2026 배포 요약

## 배포 방식 선택

### 방법 1: AWS ALB + ACM (권장) ⭐

**장점:**
- ✅ AWS Certificate Manager 무료 SSL
- ✅ 자동 인증서 갱신
- ✅ 고가용성 (Multi-AZ)
- ✅ Auto Scaling 가능
- ✅ AWS 통합 모니터링

**비용:** ~$50/월

**설정 가이드:** `AWS_DEPLOYMENT.md` 참고

---

### 방법 2: 단일 EC2 (테스트/개발용)

**참고:** Route 53 도메인이 있다면 방법 1 (ALB + ACM)을 권장합니다.
단일 EC2 방식도 ALB 없이 직접 Let's Encrypt를 사용할 수 있지만,
프로덕션 환경에서는 ALB + ACM이 더 안정적입니다.

**장점:**
- ✅ 단일 EC2로 간단
- ✅ 비용 저렴 (~$15/월)

**단점:**
- ❌ 수동 SSL 관리 필요
- ❌ Single point of failure
- ❌ Auto Scaling 불가

---

## 빠른 시작 (Route 53 이미 설정됨)

### 1단계: ACM 인증서 발급 (5분)

```
AWS Console > Certificate Manager (ap-northeast-2 리전)
> Request certificate

도메인:
- ceskorea.kr
- *.ceskorea.kr

검증 방법: DNS
> "Create records in Route 53" 클릭
> 5분 대기
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

# Nginx 설정
chmod +x setup-nginx.sh
sudo ./setup-nginx.sh

# 배포
chmod +x deploy.sh
./deploy.sh
```

### 4단계: ALB 설정 (10분)

```
1. 타겟 그룹 3개 생성:
   - ces-backend-tg (5000)
   - ces-frontend-tg (8080)
   - ces-admin-tg (3000)

2. ALB 생성 (ces-alb)
   - HTTPS:443 리스너에 ACM 인증서 연결
   - 호스트 기반 라우팅 규칙 설정

3. Route 53 레코드:
   - ceskorea.kr → ALB Alias
   - admin.ceskorea.kr → ALB Alias
   - api.ceskorea.kr → ALB Alias
```

### 5단계: 접속 확인

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

### 타겟 그룹 Unhealthy
```bash
# EC2에서
curl http://localhost:5000/health
curl http://localhost:8080
curl http://localhost:3000

# 보안 그룹 확인 (ALB SG → EC2)
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
