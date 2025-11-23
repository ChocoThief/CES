const { upload } = require('../config/s3');

const uploadMiddleware = upload.fields([
  { name: 'companyLogoColor', maxCount: 1 },
  { name: 'companyLogoWhite', maxCount: 1 },
  { name: 'promoGraphic', maxCount: 1 },
  { name: 'tableGraphic', maxCount: 1 },
  { name: 'qrFile', maxCount: 1 },
  { name: 'videoFile', maxCount: 1 }
]);

module.exports = uploadMiddleware;
