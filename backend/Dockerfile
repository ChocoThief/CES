FROM node:20-alpine

WORKDIR /app

# Install mariadb-client for mysqldump
RUN apk add --no-cache mariadb-client

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 5000

# 서버 시작 (마이그레이션은 deploy 스크립트에서 실행)
CMD ["node", "src/server.js"]
