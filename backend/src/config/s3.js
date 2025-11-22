const { S3Client } = require('@aws-sdk/client-s3');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const isDevelopment = process.env.NODE_ENV === 'development';

// 개발 환경: 로컬 uploads 디렉토리 생성
if (isDevelopment) {
  const uploadsDir = path.join(__dirname, '../../uploads');
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }
}

const s3Client = isDevelopment ? null : new S3Client({
  region: process.env.AWS_REGION || 'ap-northeast-2',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

const fileFilter = (req, file, cb) => {
  const allowedExts = {
    companyLogo: ['.ai', '.pdf', '.eps'],
    promoGraphic: ['.ai', '.psd', '.pdf', '.eps'],
    tableGraphic: ['.ai', '.psd', '.pdf', '.eps'],
    qrFile: ['.ai', '.psd', '.pdf', '.eps'],
    videoFile: ['.mp4', '.mov']
  };

  const fieldName = file.fieldname;
  const ext = file.originalname.toLowerCase().substring(file.originalname.lastIndexOf('.'));

  if (allowedExts[fieldName] && allowedExts[fieldName].includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error(`Invalid file type for ${fieldName}. Allowed: ${allowedExts[fieldName]?.join(', ')}`));
  }
};

// 개발/프로덕션에 따라 다른 storage 설정
const storage = isDevelopment
  ? multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../uploads'));
      },
      filename: (req, file, cb) => {
        const timestamp = Date.now();
        const filename = `${timestamp}-${file.originalname}`;
        cb(null, filename);
      }
    })
  : multerS3({
      s3: s3Client,
      bucket: process.env.S3_BUCKET,
      metadata: (req, file, cb) => {
        cb(null, { fieldName: file.fieldname });
      },
      key: (req, file, cb) => {
        const timestamp = Date.now();
        const filename = `${timestamp}-${file.originalname}`;
        cb(null, filename);
      },
      contentType: multerS3.AUTO_CONTENT_TYPE
    });

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 50 * 1024 * 1024 // 50MB
  }
});

// CloudFront URL로 변환하는 헬퍼 함수
const getCloudFrontUrl = (s3Key) => {
  if (isDevelopment) {
    return `http://localhost:5000/uploads/${path.basename(s3Key)}`;
  }

  const cloudfrontDomain = process.env.CLOUDFRONT_DOMAIN;
  if (cloudfrontDomain) {
    return `https://${cloudfrontDomain}/${s3Key}`;
  }
  // CloudFront 미설정시 S3 직접 URL
  return `https://${process.env.S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3Key}`;
};

module.exports = { s3Client, upload, getCloudFrontUrl };
