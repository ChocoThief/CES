const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../middleware/upload');
const { createApplication } = require('../controllers/applicationController');

// POST /api/applications - 신청 제출
router.post('/', uploadMiddleware, createApplication);

module.exports = router;
