const { Application } = require('../models');
const { getCloudFrontUrl } = require('../config/s3');

const isDevelopment = process.env.NODE_ENV === 'development';

// 파일 URL 생성 헬퍼
const getFileUrl = (file) => {
  if (!file) return null;
  // S3 업로드 (프로덕션)
  if (file.location) {
    // S3 URL에서 파일 키 추출
    const s3Key = file.key || file.location.split('.com/')[1];
    return getCloudFrontUrl(s3Key);
  }
  // 로컬 디스크 (개발)
  if (file.filename) {
    return `http://localhost:5000/uploads/${file.filename}`;
  }
  return null;
};

const createApplication = async (req, res, next) => {
  try {
    const {
      boothType, boothNumber,
      companyKr, companyEn, ceoKr, ceoEn, website, phone, addressKr, addressEn,
      contactName, contactPosition, department, contactMobile,
      companyDisplay,
      qrCode, promoVideo,
      pitching, docent, interpreter, mou
    } = req.body;

    // 파일 URL 추출
    const files = req.files;
    const companyLogoColorUrl = getFileUrl(files.companyLogoColor?.[0]);
    const companyLogoWhiteUrl = getFileUrl(files.companyLogoWhite?.[0]);
    const promoGraphicUrl = getFileUrl(files.promoGraphic?.[0]);
    const tableGraphicUrl = getFileUrl(files.tableGraphic?.[0]);
    const qrFileUrl = getFileUrl(files.qrFile?.[0]);
    const videoFileUrl = getFileUrl(files.videoFile?.[0]);

    // 필수 파일 검증
    if (!companyLogoColorUrl || !companyLogoWhiteUrl) {
      return res.status(400).json({
        error: '회사 로고(컬러)와 회사 로고(흰색)를 업로드해주세요'
      });
    }

    // 신청 생성
    const application = await Application.create({
      boothType,
      boothNumber,
      companyKr,
      companyEn,
      ceoKr,
      ceoEn,
      website,
      phone,
      addressKr,
      addressEn,
      contactName,
      contactPosition,
      department,
      contactMobile,
      companyDisplay,
      companyLogoColorUrl,
      companyLogoWhiteUrl,
      promoGraphicUrl,
      tableGraphicUrl,
      qrFileUrl,
      videoFileUrl,
      qrCode: qrCode || 'none',
      promoVideo: promoVideo || 'none',
      pitching: pitching || 'no',
      docent: docent || 'no',
      interpreter: interpreter || 'no',
      mou: mou || 'no'
    });

    res.status(201).json({
      success: true,
      applicationId: application.id,
      message: '신청이 완료되었습니다.'
    });
  } catch (error) {
    console.error('Application creation error:', error);
    next(error);
  }
};

module.exports = {
  createApplication
};
