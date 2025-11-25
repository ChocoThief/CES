FROM node:20-alpine

WORKDIR /app

# Install mariadb-client for mysqldump
RUN apk add --no-cache mariadb-client

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 5000

# 마이그레이션 실행 후 서버 시작
CMD npm run migrate && node src/server.js
