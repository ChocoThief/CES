/**
 * Database Sync Script
 * 테이블이 없을 경우 생성합니다 (기존 데이터는 유지)
 * Usage: npm run db:sync
 */

require('dotenv').config();
const { syncDatabase } = require('../models');

const runSync = async () => {
  console.log('Database sync 시작...');
  console.log('Environment:', process.env.NODE_ENV || 'development');
  console.log('Database:', process.env.DB_NAME);

  try {
    // alter: false로 설정하여 기존 테이블은 수정하지 않음
    // 테이블이 없을 경우에만 생성
    await syncDatabase(false, false);
    console.log('✓ Database sync 완료');
    process.exit(0);
  } catch (error) {
    console.error('✗ Database sync 실패:', error);
    process.exit(1);
  }
};

runSync();
