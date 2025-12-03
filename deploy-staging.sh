#!/bin/bash

# CES 2026 Development/Staging 배포 스크립트
# 사용법: ./deploy-staging.sh

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

# 환경 변수 로드
export $(cat .env.staging | grep -v '^#' | xargs)

echo -e "${GREEN}✓ DEV 환경 변수 로드 완료${NC}"

# 기존 dev 컨테이너 중지
echo "기존 DEV 컨테이너 중지 중..."
docker-compose -f docker-compose.staging.yml down || true

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
docker-compose -f docker-compose.staging.yml exec -T mariadb-dev healthcheck.sh --connect --innodb_initialized || {
    echo -e "${YELLOW}⚠ MariaDB가 아직 준비되지 않았습니다. 대기 중...${NC}"
    sleep 10
}

# 데이터베이스 마이그레이션 실행
echo "데이터베이스 마이그레이션 실행 중..."
docker-compose -f docker-compose.staging.yml exec -T backend-dev npm run migrate || {
    echo -e "${YELLOW}⚠ 마이그레이션 실패 또는 이미 실행됨${NC}"
}

# 데이터베이스 시드 실행 (관리자 계정 생성)
echo "데이터베이스 초기 데이터 생성 중..."
docker-compose -f docker-compose.staging.yml exec -T backend-dev npm run seed || {
    echo -e "${YELLOW}⚠ 이미 실행되었거나 실패했습니다${NC}"
}

# 백엔드 헬스 체크
echo "백엔드 (DEV) 상태 확인 중..."
BACKEND_HEALTH=$(curl -s http://localhost:5001/health || echo "failed")
if [[ $BACKEND_HEALTH == *"ok"* ]]; then
    echo -e "${GREEN}✓ DEV 백엔드 정상 작동${NC}"
else
    echo -e "${RED}✗ DEV 백엔드 헬스 체크 실패${NC}"
    docker-compose -f docker-compose.staging.yml logs backend-dev
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
