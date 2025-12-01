const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const {
  getApplications,
  getApplicationById,
  exportApplications,
} = require("../controllers/adminController");
const {
  getReservations,
  getReservationsForDashboard,
  getReservationById,
  approveReservation,
  rejectReservation,
  cancelReservation,
  updateMemo,
  exportReservations,
} = require("../controllers/docentReservationController");

// 모든 admin 라우트는 인증 필요
router.use(authMiddleware);

// GET /api/admin/applications/export - 전체 데이터 내보내기 (엑셀용)
router.get("/applications/export", exportApplications);

// GET /api/admin/applications - 신청 목록
router.get("/applications", getApplications);

// GET /api/admin/applications/:id - 신청 상세
router.get("/applications/:id", getApplicationById);

// 도슨트 예약 관리 API
// GET /api/admin/docent-reservations/export - 전체 데이터 내보내기 (엑셀용)
router.get("/docent-reservations/export", exportReservations);

// GET /api/admin/docent-reservations - 예약 목록
router.get("/docent-reservations", getReservations);

// GET /api/admin/docent-reservations/dashboard - 대시보드용 예약 목록 (cancelled 제외)
router.get("/docent-reservations/dashboard", getReservationsForDashboard);

// GET /api/admin/docent-reservations/:id - 예약 상세
router.get("/docent-reservations/:id", getReservationById);

// PATCH /api/admin/docent-reservations/:id/approve - 예약 승인
router.patch("/docent-reservations/:id/approve", approveReservation);

// PATCH /api/admin/docent-reservations/:id/reject - 예약 거절
router.patch("/docent-reservations/:id/reject", rejectReservation);

// PATCH /api/admin/docent-reservations/:id/memo - 메모 수정
router.patch("/docent-reservations/:id/memo", updateMemo);

// PATCH /api/admin/docent-reservations/:id/cancel - 예약 취소
router.patch("/docent-reservations/:id/cancel", cancelReservation);

module.exports = router;
