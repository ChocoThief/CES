const express = require('express');
const router = express.Router();
const { createReservation, getAvailableSlots } = require('../controllers/docentReservationController');

// POST /api/docent-reservations - 예약 신청
router.post('/', createReservation);

// GET /api/docent-reservations/available - 가용 타임슬롯 조회
router.get('/available', getAvailableSlots);

module.exports = router;
