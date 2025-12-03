#!/bin/bash

# CES 2026 Development/Staging 배포 스크립트
# 사용법: ./deploy-staging.sh [--reset-db]
# --reset-db: DB 볼륨 삭제 후 새로 생성 (주의: 모든 데이터 삭제됨)

set -e  # 에러 발생 시 중단

echo "🚀 CES 2026 DEV 환경 배포 시작..."

# 출력 색상
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# .env.staging 파일 확인
if [ ! -f ".env.staging" ]; then
    echo -e "${RED}✗ .env.staging 파일을 찾을 수 없습니다!${NC}"
    echo ".env.staging.example 파일을 복사하여 .env.staging 파일을 생성하세요"
    echo "  cp .env.staging.example .env.staging"
    exit 1
fi

# 환경 변수 로드 (특수문자 처리를 위해 set -a 사용)
set -a
source .env.staging
set +a

echo -e "${GREEN}✓ DEV 환경 변수 로드 완료${NC}"
echo "  DB_PASSWORD: ${DB_PASSWORD:0:3}***"

# --reset-db 옵션 처리
if [ "$1" == "--reset-db" ]; then
    echo -e "${YELLOW}⚠ DB 초기화 모드: 모든 DEV 데이터가 삭제됩니다${NC}"
    read -p "계속하시겠습니까? (y/N): " confirm
    if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
        echo "취소되었습니다."
        exit 0
    fi

    echo "기존 DEV 컨테이너 및 볼륨 삭제 중..."
    docker-compose -f docker-compose.staging.yml down -v || true
    FRESH_DB=true
else
    # 기존 dev 컨테이너 중지 (볼륨 유지)
    echo "기존 DEV 컨테이너 중지 중..."
    docker-compose -f docker-compose.staging.yml down || true
    FRESH_DB=false
fi

# 최신 이미지 가져오기
echo "Docker 이미지 업데이트 중..."
docker-compose -f docker-compose.staging.yml pull || true

# 빌드 및 컨테이너 시작
echo "DEV 컨테이너 빌드 및 시작 중..."
docker-compose -f docker-compose.staging.yml --env-file .env.staging up -d --build

# 서비스 시작 대기
echo "서비스 시작 대기 중..."
sleep 10

# MariaDB 준비 확인
echo "MariaDB (DEV) 상태 확인 중..."
for i in {1..6}; do
    if docker-compose -f docker-compose.staging.yml exec -T mariadb-dev healthcheck.sh --connect --innodb_initialized 2>/dev/null; then
        echo -e "${GREEN}✓ MariaDB 준비 완료${NC}"
        break
    fi
    echo "MariaDB 대기 중... ($i/6)"
    sleep 5
done

# Fresh DB인 경우에만 sync 및 migrate 실행
if [ "$FRESH_DB" == "true" ]; then
    # 데이터베이스 테이블 생성 (sync)
    echo "데이터베이스 테이블 생성 중..."
    docker-compose -f docker-compose.staging.yml exec -T backend-dev npm run db:sync || {
        echo -e "${RED}✗ DB sync 실패${NC}"
        docker-compose -f docker-compose.staging.yml logs backend-dev --tail 20
        exit 1
    }
    echo -e "${GREEN}✓ 테이블 생성 완료${NC}"

    # 마이그레이션 기록 추가 (sync로 이미 최신 스키마이므로 마이그레이션 스킵)
    echo "마이그레이션 기록 등록 중..."
    docker-compose -f docker-compose.staging.yml exec -T mariadb-dev mariadb -uces_user_dev -p"${DB_PASSWORD}" ces2026_dev -e "
    INSERT IGNORE INTO SequelizeMeta (name) VALUES
    ('20251123140816-split-company-logo-fields.js'),
    ('20251123152149-increase-url-column-length.js'),
    ('20251123152641-make-optional-fields-nullable.js'),
    ('20251201074700-create-docent-reservations-table.js'),
    ('20251201074740-add-cancelled-status-to-docent-reservations.js'),
    ('20251201100000-add-interests-to-docent-reservations.js'),
    ('20251202000000-make-promo-video-optional.js'),
    ('20251202053500-make-promo-graphic-nullable.js'),
    ('20251202060000-update-timeslot-length.js');
    " || {
        echo -e "${YELLOW}⚠ 마이그레이션 기록 등록 실패 (무시)${NC}"
    }

    # 데이터베이스 시드 실행 (관리자 계정 생성)
    echo "데이터베이스 초기 데이터 생성 중..."
    docker-compose -f docker-compose.staging.yml exec -T backend-dev npm run seed || {
        echo -e "${YELLOW}⚠ 시드 실패 또는 이미 실행됨${NC}"
    }
else
    # 기존 DB - 마이그레이션만 실행
    echo "데이터베이스 마이그레이션 확인 중..."
    docker-compose -f docker-compose.staging.yml exec -T backend-dev npm run migrate || {
        echo -e "${YELLOW}⚠ 마이그레이션 실패 또는 이미 실행됨${NC}"
    }
fi

# 백엔드 헬스 체크
echo "백엔드 (DEV) 상태 확인 중..."
sleep 3
BACKEND_HEALTH=$(curl -s http://localhost:5001/health || echo "failed")
if [[ $BACKEND_HEALTH == *"ok"* ]]; then
    echo -e "${GREEN}✓ DEV 백엔드 정상 작동${NC}"
else
    echo -e "${RED}✗ DEV 백엔드 헬스 체크 실패${NC}"
    docker-compose -f docker-compose.staging.yml logs backend-dev --tail 30
    exit 1
fi

# 실행 중인 컨테이너 표시
echo ""
echo "실행 중인 DEV 컨테이너:"
docker-compose -f docker-compose.staging.yml ps

echo ""
echo -e "${GREEN}✅ DEV 환경 배포 완료!${NC}"
echo ""
echo -e "${CYAN}DEV 서비스 접속 주소:${NC}"
echo "  - 프론트엔드: https://dev.ceskorea.kr"
echo "  - 관리자 페이지: https://dev-admin.ceskorea.kr"
echo "  - 백엔드 API: https://dev-api.ceskorea.kr"
echo ""
echo "로컬 컨테이너 포트:"
echo "  - 프론트엔드: http://localhost:8081"
echo "  - 관리자: http://localhost:3001"
echo "  - 백엔드: http://localhost:5001"
echo "  - MariaDB: localhost:3307"
echo ""
echo -e "${YELLOW}⚠ DEV 환경입니다. Production 배포는 ./deploy.sh 를 사용하세요.${NC}"
