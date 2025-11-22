#!/bin/bash

# CES 2026 Deployment Script
# Usage: ./deploy.sh

set -e  # Exit on error

echo "🚀 Starting CES 2026 Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if running on EC2
if [ ! -f ".env" ]; then
    echo -e "${RED}✗ .env file not found!${NC}"
    echo "Please create .env file from .env.example"
    exit 1
fi

# Load environment variables
export $(cat .env | grep -v '^#' | xargs)

echo -e "${GREEN}✓ Environment variables loaded${NC}"

# Stop existing containers
echo "Stopping existing containers..."
docker-compose down || true

# Pull latest images
echo "Pulling latest Docker images..."
docker-compose pull || true

# Build and start containers
echo "Building and starting containers..."
docker-compose up -d --build

# Wait for services to be healthy
echo "Waiting for services to start..."
sleep 10

# Check if MariaDB is ready
echo "Checking MariaDB..."
docker-compose exec -T mariadb healthcheck.sh --connect --innodb_initialized || {
    echo -e "${YELLOW}⚠ MariaDB not ready yet, waiting...${NC}"
    sleep 10
}

# Run database seed (creates admin user if not exists)
echo "Running database seed..."
docker-compose exec -T backend npm run seed || {
    echo -e "${YELLOW}⚠ Seed already run or failed${NC}"
}

# Check backend health
echo "Checking backend health..."
BACKEND_HEALTH=$(curl -s http://localhost:5000/health || echo "failed")
if [[ $BACKEND_HEALTH == *"ok"* ]]; then
    echo -e "${GREEN}✓ Backend is healthy${NC}"
else
    echo -e "${RED}✗ Backend health check failed${NC}"
    docker-compose logs backend
    exit 1
fi

# Show running containers
echo ""
echo "Running containers:"
docker-compose ps

echo ""
echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo ""
echo "Services (accessible through ALB with ACM SSL):"
echo "  - Frontend: https://ceskorea.kr"
echo "  - Admin: https://admin.ceskorea.kr"
echo "  - Backend API: https://api.ceskorea.kr"
echo ""
echo "Local container ports:"
echo "  - Frontend: http://localhost:8080"
echo "  - Admin: http://localhost:3000"
echo "  - Backend: http://localhost:5000"
echo ""
echo "Default admin credentials:"
echo "  Username: admin"
echo "  Password: admin123"
echo ""
echo -e "${YELLOW}⚠ Please change the default password!${NC}"
echo ""
echo "Note: SSL is managed by AWS Certificate Manager (ACM) on the Application Load Balancer."
echo "Nginx on this EC2 instance only handles HTTP traffic from ALB."
