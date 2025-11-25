const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { getApplications, getApplicationById, exportApplications } = require('../controllers/adminController');

// 모든 admin 라우트는 인증 필요
router.use(authMiddleware);

// GET /api/admin/applications/export - 전체 데이터 내보내기 (엑셀용)
router.get('/applications/export', exportApplications);

// GET /api/admin/applications - 신청 목록
router.get('/applications', getApplications);

// GET /api/admin/applications/:id - 신청 상세
router.get('/applications/:id', getApplicationById);

module.exports = router;
