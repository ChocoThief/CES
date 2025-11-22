const { Application } = require('../models');

const isDevelopment = process.env.NODE_ENV === 'development';

// 파일 URL 생성 헬퍼
const getFileUrl = (file) => {
  if (!file) return null;
  // S3 업로드 (프로덕션)
  if (file.location) {
    return file.location;
  }
  // 로컬 디스크 (개발)
  if (file.filename) {
    return `http://localhost:5000/uploads/${file.filename}`;
  }
  return null;
};

const createApplication = async (req, res) => {
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
    const companyLogoUrl = getFileUrl(files.companyLogo?.[0]);
    const promoGraphicUrl = getFileUrl(files.promoGraphic?.[0]);
    const tableGraphicUrl = getFileUrl(files.tableGraphic?.[0]);
    const qrFileUrl = getFileUrl(files.qrFile?.[0]);
    const videoFileUrl = getFileUrl(files.videoFile?.[0]);

    // 필수 파일 검증
    if (!companyLogoUrl || !promoGraphicUrl) {
      return res.status(400).json({
        error: 'Company logo and promo graphic are required'
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
      companyLogoUrl,
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
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createApplication
};
