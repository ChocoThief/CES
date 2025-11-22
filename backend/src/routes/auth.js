const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { login, getCurrentUser } = require('../controllers/authController');

// POST /api/auth/login - 로그인
router.post('/login', login);

// GET /api/auth/me - 현재 사용자 정보
router.get('/me', authMiddleware, getCurrentUser);

module.exports = router;
