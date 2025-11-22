#!/bin/bash

# CES 2026 배포 스크립트
# 사용법: ./deploy.sh

set -e  # 에러 발생 시 중단

echo "🚀 CES 2026 배포 시작..."

# 출력 색상
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# .env 파일 확인
if [ ! -f ".env" ]; then
    echo -e "${RED}✗ .env 파일을 찾을 수 없습니다!${NC}"
    echo ".env.example 파일을 복사하여 .env 파일을 생성하세요"
    exit 1
fi

# 환경 변수 로드
export $(cat .env | grep -v '^#' | xargs)

echo -e "${GREEN}✓ 환경 변수 로드 완료${NC}"

# 기존 컨테이너 중지
echo "기존 컨테이너 중지 중..."
docker-compose down || true

# 최신 이미지 가져오기
echo "Docker 이미지 업데이트 중..."
docker-compose pull || true

# 빌드 및 컨테이너 시작
echo "컨테이너 빌드 및 시작 중..."
docker-compose up -d --build

# 서비스 시작 대기
echo "서비스 시작 대기 중..."
sleep 10

# MariaDB 준비 확인
echo "MariaDB 상태 확인 중..."
docker-compose exec -T mariadb healthcheck.sh --connect --innodb_initialized || {
    echo -e "${YELLOW}⚠ MariaDB가 아직 준비되지 않았습니다. 대기 중...${NC}"
    sleep 10
}

# 데이터베이스 시드 실행 (관리자 계정 생성)
echo "데이터베이스 초기 데이터 생성 중..."
docker-compose exec -T backend npm run seed || {
    echo -e "${YELLOW}⚠ 이미 실행되었거나 실패했습니다${NC}"
}

# 백엔드 헬스 체크
echo "백엔드 상태 확인 중..."
BACKEND_HEALTH=$(curl -s http://localhost:5000/health || echo "failed")
if [[ $BACKEND_HEALTH == *"ok"* ]]; then
    echo -e "${GREEN}✓ 백엔드 정상 작동${NC}"
else
    echo -e "${RED}✗ 백엔드 헬스 체크 실패${NC}"
    docker-compose logs backend
    exit 1
fi

# 실행 중인 컨테이너 표시
echo ""
echo "실행 중인 컨테이너:"
docker-compose ps

echo ""
echo -e "${GREEN}✅ 배포 완료!${NC}"
echo ""
echo "서비스 접속 주소:"
echo "  - 프론트엔드: https://ceskorea.kr"
echo "  - 관리자 페이지: https://admin.ceskorea.kr"
echo "  - 백엔드 API: https://api.ceskorea.kr"
echo ""
echo "로컬 컨테이너 포트:"
echo "  - 프론트엔드: http://localhost:8080"
echo "  - 관리자: http://localhost:3000"
echo "  - 백엔드: http://localhost:5000"
echo ""
echo "기본 관리자 계정:"
echo "  아이디: admin"
echo "  비밀번호: admin123"
echo ""
echo -e "${YELLOW}⚠ 반드시 기본 비밀번호를 변경하세요!${NC}"
