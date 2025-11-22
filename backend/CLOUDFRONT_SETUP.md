# AWS S3 + CloudFront + Custom Domain 설정 가이드

## 🎯 왜 Custom Domain을 사용해야 하나?

1. **보안**: S3 버킷 이름이 URL에 노출되지 않음
2. **성능**: CloudFront CDN으로 전세계 어디서나 빠른 속도
3. **프로페셔널**: `files.yourcompany.com` vs `bucket-name.s3.amazonaws.com`
4. **HTTPS**: 커스텀 SSL 인증서 적용 가능
5. **DDoS 보호**: CloudFront의 AWS Shield 기본 제공
6. **캐싱**: 정적 파일 캐싱으로 비용 절감 및 속도 향상

---

## 📋 설정 단계

### 1️⃣ IAM 사용자 생성

```
AWS Console → IAM → Users → Create user
```

**설정:**
- 사용자 이름: `ces2026-s3-user`
- Access key 생성 → Access Key ID & Secret Access Key 저장

**권한 정책 (최소 권한 원칙):**
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:DeleteObject",
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::ces2026-application-files",
                "arn:aws:s3:::ces2026-application-files/*"
            ]
        }
    ]
}
```

---

### 2️⃣ S3 버킷 생성 (Private)

```
S3 → Create bucket
```

**설정:**
- Bucket name: `ces2026-application-files`
- Region: `ap-northeast-2` (서울)
- **✅ Block all public access** (모두 차단!)
  - CloudFront로만 접근하게 하여 S3 직접 접근 차단
- Versioning: 선택사항
- Encryption: AES-256 (기본값)

---

### 3️⃣ CloudFront Distribution 생성

```
CloudFront → Create distribution
```

#### Origin 설정

- **Origin domain**: `ces2026-application-files.s3.ap-northeast-2.amazonaws.com` 선택
- **Origin access**: `Origin access control settings (recommended)` 선택
- **Create new OAC**:
  - Name: `ces2026-s3-oac`
  - Signing behavior: Sign requests
  - Origin type: S3

#### Default cache behavior

- **Viewer protocol policy**: Redirect HTTP to HTTPS
- **Allowed HTTP methods**: GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE
- **Cache policy**: CachingOptimized
- **Origin request policy**: CORS-CustomOrigin

#### Settings

- **Price class**: Use only North America and Europe (또는 필요에 따라)
- **Alternate domain names (CNAME)**: `files.yourcompany.com` (선택사항)
- **Custom SSL certificate**: (도메인 사용시 ACM 인증서 선택)

**Distribution 생성 완료!**

---

### 4️⃣ S3 버킷 정책 업데이트

CloudFront 생성 후 나오는 정책 복사 → S3 버킷에 적용

```
S3 → ces2026-application-files → Permissions → Bucket policy → Edit
```

```json
{
    "Version": "2012-10-17",
    "Statement": {
        "Sid": "AllowCloudFrontServicePrincipal",
        "Effect": "Allow",
        "Principal": {
            "Service": "cloudfront.amazonaws.com"
        },
        "Action": "s3:GetObject",
        "Resource": "arn:aws:s3:::ces2026-application-files/*",
        "Condition": {
            "StringEquals": {
                "AWS:SourceArn": "arn:aws:cloudfront::YOUR_ACCOUNT_ID:distribution/YOUR_DISTRIBUTION_ID"
            }
        }
    }
}
```

**⚠️ YOUR_ACCOUNT_ID와 YOUR_DISTRIBUTION_ID를 실제 값으로 변경하세요!**

---

### 5️⃣ (선택) Custom Domain 설정

#### A. ACM에서 SSL 인증서 발급

**⚠️ 중요: us-east-1 리전으로 변경!** (CloudFront는 us-east-1 인증서만 사용)

```
Certificate Manager (us-east-1) → Request certificate
```

- **Domain names**: `files.yourcompany.com`
- **Validation method**: DNS validation
- **Create record in Route 53** 버튼 클릭 (자동 검증)

#### B. Route 53에서 도메인 설정

```
Route 53 → Hosted zones → yourcompany.com → Create record
```

- **Record name**: `files`
- **Record type**: A
- **Alias**: Yes
- **Route traffic to**: Alias to CloudFront distribution
- **Distribution**: 위에서 생성한 distribution 선택

#### C. CloudFront에 인증서 적용

```
CloudFront → Distribution → Edit
```

- **Alternate domain names**: `files.yourcompany.com`
- **Custom SSL certificate**: ACM 인증서 선택
- **Save changes**

---

### 6️⃣ 환경 변수 설정

프로젝트 루트에 `.env` 파일 생성:

```bash
# Database
DB_HOST=localhost
DB_NAME=ces2026
DB_USER=ces_user
DB_PASSWORD=your_password
DB_ROOT_PASSWORD=your_root_password

# JWT
JWT_SECRET=your_secret_key_at_least_32_characters_long_random_string

# AWS S3
AWS_ACCESS_KEY_ID=AKIAXXXXXXXXXX
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/XXXXXXXXXX
AWS_REGION=ap-northeast-2
S3_BUCKET=ces2026-application-files

# CloudFront (Custom Domain)
# CloudFront Distribution 도메인:
CLOUDFRONT_DOMAIN=d1234567890abc.cloudfront.net
# 또는 Custom Domain 사용시:
# CLOUDFRONT_DOMAIN=files.yourcompany.com

# Server
PORT=5000
NODE_ENV=development

# Frontend URLs
FRONTEND_URL=http://localhost:8080
ADMIN_URL=http://localhost:3000
```

---

## 💻 코드 사용 예시

### 파일 업로드 라우터 예시

```javascript
const express = require('express');
const router = express.Router();
const { upload, getCloudFrontUrl } = require('../config/s3');

// 단일 파일 업로드
router.post('/upload/logo', upload.single('companyLogo'), (req, res) => {
  try {
    // S3 업로드 정보
    const s3File = req.file;

    // S3 키 (파일 경로)
    const s3Key = s3File.key;

    // CloudFront URL로 변환
    const publicUrl = getCloudFrontUrl(s3Key);

    res.json({
      success: true,
      message: 'File uploaded successfully',
      file: {
        originalName: s3File.originalname,
        size: s3File.size,
        url: publicUrl,  // CloudFront URL
        key: s3Key       // S3 key (DB 저장용)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// 다중 파일 업로드
router.post('/upload/application', upload.fields([
  { name: 'companyLogo', maxCount: 1 },
  { name: 'promoGraphic', maxCount: 1 },
  { name: 'videoFile', maxCount: 1 }
]), (req, res) => {
  try {
    const files = {};

    // 각 필드별 파일 처리
    for (const fieldName in req.files) {
      const file = req.files[fieldName][0];
      files[fieldName] = {
        originalName: file.originalname,
        size: file.size,
        url: getCloudFrontUrl(file.key),
        key: file.key
      };
    }

    res.json({
      success: true,
      message: 'Files uploaded successfully',
      files
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
```

### 데이터베이스에 URL 저장

```javascript
// Application model
const application = await Application.create({
  companyName: req.body.companyName,
  companyLogoUrl: getCloudFrontUrl(req.files.companyLogo[0].key),
  videoFileUrl: getCloudFrontUrl(req.files.videoFile[0].key),
  // ... 기타 필드
});
```

### 파일 삭제 예시

```javascript
const { S3Client, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const { s3Client } = require('../config/s3');

async function deleteFileFromS3(s3Key) {
  try {
    const command = new DeleteObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: s3Key
    });

    await s3Client.send(command);
    console.log(`File deleted: ${s3Key}`);
  } catch (error) {
    console.error('Error deleting file:', error);
    throw error;
  }
}

// 사용 예시
router.delete('/application/:id', async (req, res) => {
  const application = await Application.findByPk(req.params.id);

  // S3에서 파일 삭제
  if (application.companyLogoKey) {
    await deleteFileFromS3(application.companyLogoKey);
  }

  // DB에서 레코드 삭제
  await application.destroy();

  res.json({ success: true });
});
```

---

## 🔒 보안 Best Practices

### 1. S3 버킷 완전 차단
```
✅ Block all public access 활성화
✅ CloudFront OAC로만 접근 허용
✅ 버킷 정책에서 CloudFront ARN 검증
```

### 2. IAM 최소 권한
```
✅ 특정 버킷만 접근 가능
✅ 필요한 작업(PutObject, GetObject)만 허용
✅ Access Key 정기적으로 로테이션
```

### 3. CloudFront 보안 설정
```
✅ HTTPS 강제 (Redirect HTTP to HTTPS)
✅ AWS WAF 적용 (선택사항, DDoS/SQL Injection 방어)
✅ Signed URLs/Cookies (민감한 파일용)
```

### 4. 환경 변수 보호
```
✅ .env 파일 절대 Git 커밋 금지
✅ 프로덕션: AWS Secrets Manager 또는 환경변수 사용
✅ AWS 키 노출시 즉시 비활성화 및 재발급
```

---

## 🚀 배포시 체크리스트

- [ ] IAM 사용자 생성 및 키 발급
- [ ] S3 버킷 생성 (Private)
- [ ] CloudFront Distribution 생성
- [ ] S3 버킷 정책 업데이트
- [ ] (선택) ACM 인증서 발급
- [ ] (선택) Route 53 레코드 생성
- [ ] (선택) CloudFront에 Custom Domain 적용
- [ ] .env 파일 설정
- [ ] CloudFront Distribution 배포 완료 대기 (10-15분)
- [ ] 테스트 파일 업로드 및 접근 확인
- [ ] S3 직접 URL 차단 확인

---

## 📊 비용 예상

### S3 비용 (서울 리전)
- 스토리지: $0.025 per GB/월
- PUT 요청: $0.005 per 1,000 requests
- GET 요청: $0.0004 per 1,000 requests

### CloudFront 비용
- 데이터 전송 (한국): $0.14 per GB (처음 10TB)
- HTTP/HTTPS 요청: $0.0075 per 10,000 requests

**예시**: 100GB 스토리지 + 1TB 전송 = 약 $145/월

---

## ❓ 문제 해결

### CloudFront에서 403 Forbidden 발생
- S3 버킷 정책 확인
- OAC 설정 확인
- Distribution ARN이 정확한지 확인

### Custom Domain이 작동하지 않음
- ACM 인증서가 us-east-1에 있는지 확인
- Route 53 레코드가 올바른지 확인
- CloudFront Distribution 배포 완료 대기

### 파일 업로드 후 바로 접근 안됨
- CloudFront 캐싱 때문일 수 있음
- Cache Invalidation 생성: `/your-file-name`

---

## 📚 참고 자료

- [AWS S3 Documentation](https://docs.aws.amazon.com/s3/)
- [AWS CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)
- [Multer S3 Documentation](https://www.npmjs.com/package/multer-s3)

