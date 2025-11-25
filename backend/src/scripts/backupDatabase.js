const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
require('dotenv').config();

const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'ap-northeast-2',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

const backupDatabase = async () => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupFileName = `ces2026-backup-${timestamp}.sql`;
  const backupFilePath = path.join('/tmp', backupFileName);

  console.log('=== 데이터베이스 백업 시작 ===');
  console.log(`백업 파일: ${backupFileName}`);

  try {
    // 환경변수 확인
    if (!process.env.S3_BACKUP_BUCKET) {
      throw new Error('S3_BACKUP_BUCKET 환경변수가 설정되지 않았습니다.');
    }

    // MariaDB 덤프 생성
    const dumpCommand = `mysqldump -h ${process.env.DB_HOST || 'mariadb'} \
      -u ${process.env.DB_USER} \
      -p${process.env.DB_PASSWORD} \
      ${process.env.DB_NAME} \
      > ${backupFilePath}`;

    await new Promise((resolve, reject) => {
      exec(dumpCommand, (error, stdout, stderr) => {
        if (error) {
          console.error('덤프 생성 실패:', error);
          reject(error);
          return;
        }
        if (stderr && !stderr.includes('Using a password')) {
          console.log('덤프 경고:', stderr);
        }
        console.log('✓ 데이터베이스 덤프 생성 완료');
        resolve();
      });
    });

    // 파일 크기 확인
    const stats = fs.statSync(backupFilePath);
    console.log(`✓ 백업 파일 크기: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);

    // S3에 업로드 (백업 전용 버킷)
    const fileContent = fs.readFileSync(backupFilePath);
    const s3Key = `backups/${backupFileName}`;

    const uploadParams = {
      Bucket: process.env.S3_BACKUP_BUCKET,
      Key: s3Key,
      Body: fileContent,
      ContentType: 'application/sql',
      ServerSideEncryption: 'AES256',
      Metadata: {
        'backup-date': new Date().toISOString(),
        'database': process.env.DB_NAME,
        'host': process.env.DB_HOST,
      }
    };

    await s3Client.send(new PutObjectCommand(uploadParams));
    console.log(`✓ S3 업로드 완료: s3://${process.env.S3_BACKUP_BUCKET}/${s3Key}`);

    // 로컬 임시 파일 삭제
    fs.unlinkSync(backupFilePath);
    console.log('✓ 로컬 임시 파일 삭제 완료');

    console.log('\n=== 백업 완료 ===');
    console.log(`백업 위치: s3://${process.env.S3_BACKUP_BUCKET}/${s3Key}`);
    console.log(`백업 시간: ${new Date().toISOString()}`);
    console.log(`파일 크기: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);

    return { success: true, s3Key, size: stats.size };
  } catch (error) {
    console.error('\n✗ 백업 실패:', error.message);

    // 에러 발생 시 임시 파일 정리
    if (fs.existsSync(backupFilePath)) {
      fs.unlinkSync(backupFilePath);
    }

    throw error;
  }
};

// 스크립트로 직접 실행 시
if (require.main === module) {
  backupDatabase()
    .then(() => {
      console.log('\n백업 작업이 성공적으로 완료되었습니다.');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n백업 작업 중 오류가 발생했습니다:', error);
      process.exit(1);
    });
}

module.exports = backupDatabase;
