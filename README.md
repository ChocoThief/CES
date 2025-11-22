# CES 2026 Application System

CES 2026 참가 신청 및 관리 시스템

## 🚀 빠른 배포 (EC2 + Route 53 + ACM)

```bash
# 1. 프로젝트 클론
git clone https://github.com/your-org/CES.git
cd CES

# 2. 환경 설정
cp .env.example .env
nano .env  # AWS 키, DB 비밀번호 입력

# 3. 배포 실행
chmod +x deploy.sh
./deploy.sh
```

**상세 가이드:**
- AWS 배포: [AWS_DEPLOYMENT.md](./AWS_DEPLOYMENT.md)
- EC2 단독 배포: [EC2_SETUP.md](./EC2_SETUP.md)
- 요약: [DEPLOYMENT_SUMMARY.md](./DEPLOYMENT_SUMMARY.md)

## 프로젝트 구조

```
/CES/
├── frontend/          # 참가 신청 폼 (Vue 3)
├── admin/             # 관리자 페이지 (Vue 3)
├── backend/           # Backend API (Express + MariaDB + AWS S3)
├── docker-compose.yml
└── docker-compose.dev.yml
```

## 기술 스택

### Backend
- Express.js
- MariaDB (Sequelize ORM)
- AWS S3 (파일 저장)
- JWT 인증
- bcryptjs (비밀번호 해싱)

### Frontend (신청 폼)
- Vue 3
- Vite

### Admin (관리자 페이지)
- Vue 3
- Vue Router
- Pinia
- Axios

### DevOps
- Docker & Docker Compose
- Nginx

## 시작하기

### 1. 환경 변수 설정

```bash
cp .env.example .env
```

`.env` 파일을 열어 다음 값들을 설정하세요:
- `DB_PASSWORD`: MariaDB 비밀번호
- `DB_ROOT_PASSWORD`: MariaDB root 비밀번호
- `JWT_SECRET`: JWT 비밀 키 (최소 32자)
- `AWS_ACCESS_KEY_ID`: AWS Access Key
- `AWS_SECRET_ACCESS_KEY`: AWS Secret Key
- `AWS_REGION`: AWS 리전 (예: ap-northeast-2)
- `S3_BUCKET`: S3 버킷 이름

### 2. 개발 환경 실행

```bash
# Docker Compose로 전체 실행
docker-compose -f docker-compose.dev.yml up

# 또는 개별 실행
cd backend && npm install && npm run dev
cd admin && npm install && npm run dev
cd frontend && npm install && npm run dev
```

서비스 접속:
- Frontend (신청 폼): http://localhost:8080
- Admin (관리자): http://localhost:3001
- Backend API: http://localhost:5000

### 3. 관리자 계정 생성

```bash
cd backend
npm run create-admin

# 또는 Docker 환경에서
docker-compose exec backend npm run create-admin
```

### 4. 프로덕션 배포

```bash
# .env 파일 설정 확인
cp .env.example .env
vi .env

# Docker Compose로 빌드 및 실행
docker-compose up -d --build

# 로그 확인
docker-compose logs -f
```

## API 엔드포인트

### Public API
- `POST /api/applications` - 신청 제출 (multipart/form-data)

### Auth API
- `POST /api/auth/login` - 관리자 로그인
- `GET /api/auth/me` - 현재 사용자 정보 (JWT 필요)

### Admin API (JWT 인증 필요)
- `GET /api/admin/applications` - 신청 목록 (페이징, 검색)
- `GET /api/admin/applications/:id` - 신청 상세

## 데이터베이스 스키마

### applications 테이블 (28개 필드)
- 부스 정보: `booth_type`, `booth_number`
- 회사 정보: `company_kr`, `company_en`, `ceo_kr`, `ceo_en`, `website`, `phone`, `address_kr`, `address_en`
- 담당자 정보: `contact_name`, `contact_position`, `department`, `contact_mobile`
- 홍보 정보: `company_display`
- 파일 URL: `company_logo_url`, `promo_graphic_url`, `table_graphic_url`, `qr_file_url`, `video_file_url`
- 옵션: `qr_code`, `promo_video`
- 참여 프로그램: `pitching`, `docent`, `interpreter`, `mou`
- 타임스탬프: `created_at`, `updated_at`

### admin_users 테이블
- `id`, `username`, `email`, `password`, `created_at`, `updated_at`

## 파일 업로드

### 허용 파일 타입
- 회사 로고: .ai, .pdf, .eps
- 홍보 그래픽: .ai, .psd, .pdf, .eps
- 테이블 그래픽: .ai, .psd, .pdf, .eps (Eureka Park만)
- QR 코드: .ai, .psd, .pdf, .eps
- 프로모 비디오: .mp4, .mov (Eureka Park만)

### 파일 크기 제한
- 최대 50MB/파일

## 테스트

```bash
cd backend
npm test
```

## 트러블슈팅

### MariaDB 연결 실패
```bash
# Docker 컨테이너 상태 확인
docker-compose ps

# MariaDB 로그 확인
docker-compose logs mariadb

# DB 헬스체크
docker-compose exec mariadb healthcheck.sh --connect
```

### S3 업로드 실패
- AWS 자격 증명 확인
- S3 버킷 권한 확인
- CORS 설정 확인

### JWT 인증 실패
- JWT_SECRET이 32자 이상인지 확인
- 토큰 만료 시간 확인 (기본 24시간)

## 라이센스

ISC
