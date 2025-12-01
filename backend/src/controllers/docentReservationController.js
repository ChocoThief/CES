const { DocentReservation } = require("../models");
const { Op } = require("sequelize");

// 공개 API: 예약 생성
const createReservation = async (req, res, next) => {
  try {
    const {
      reservationDate,
      docentType,
      timeSlot,
      representative,
      contact,
      phone,
      email,
      visitorCount,
      notes,
    } = req.body;

    // 필수 필드 검증
    if (
      !reservationDate ||
      !docentType ||
      !timeSlot ||
      !representative ||
      !contact ||
      !phone ||
      !email ||
      !visitorCount
    ) {
      return res.status(400).json({
        error: "필수 항목을 모두 입력해주세요.",
      });
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "올바른 이메일 형식을 입력해주세요.",
      });
    }

    // 예약 생성
    const reservation = await DocentReservation.create({
      reservationDate,
      docentType,
      timeSlot,
      representative,
      contact,
      phone,
      email,
      visitorCount,
      notes,
      status: "pending",
    });

    res.status(201).json({
      success: true,
      reservationId: reservation.id,
      message: "도슨트 투어 예약이 완료되었습니다.",
    });
  } catch (error) {
    console.error("Reservation creation error:", error);
    next(error);
  }
};

// 공개 API: 가용 타임슬롯 조회 (승인된 예약이 있으면 마감 처리)
const getAvailableSlots = async (req, res, next) => {
  try {
    // 타임슬롯 규칙
    // 1월 6일: 14:00, 15:00, 16:00
    // 1월 7-9일: 11:00, 14:00, 15:00, 16:00
    const allSlots = {
      "2025-01-06": ["14:00", "15:00", "16:00"],
      "2025-01-07": ["11:00", "14:00", "15:00", "16:00"],
      "2025-01-08": ["11:00", "14:00", "15:00", "16:00"],
      "2025-01-09": ["11:00", "14:00", "15:00", "16:00"],
    };

    // 승인된 예약 조회
    const approvedReservations = await DocentReservation.findAll({
      where: { status: "approved" },
      attributes: ["reservationDate", "docentType", "timeSlot"],
      raw: true,
    });

    // 마감된 슬롯 목록 생성 (날짜-도슨트타입-시간)
    const bookedSlots = new Set(
      approvedReservations.map(
        (r) => `${r.reservationDate}-${r.docentType}-${r.timeSlot}`
      )
    );

    // 각 슬롯의 가용 여부 포함하여 반환
    const slots = {};
    for (const [date, times] of Object.entries(allSlots)) {
      slots[date] = {
        A: times.map((time) => ({
          slot: time,
          available: !bookedSlots.has(`${date}-A-${time}`),
        })),
        B: times.map((time) => ({
          slot: time,
          available: !bookedSlots.has(`${date}-B-${time}`),
        })),
      };
    }

    res.json({ slots });
  } catch (error) {
    console.error("Get available slots error:", error);
    next(error);
  }
};

// 관리자 API: 예약 목록 조회 (필터, 통계, 정렬 포함)
const getReservations = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;

    // 필터
    const { date, docent, status, search, sortBy, sortOrder } = req.query;

    const where = {};

    if (date) {
      where.reservationDate = date;
    }

    if (docent) {
      where.docentType = docent;
    }

    if (status) {
      where.status = status;
    }

    if (search) {
      where[Op.or] = [
        { representative: { [Op.like]: `%${search}%` } },
        { contact: { [Op.like]: `%${search}%` } },
        { email: { [Op.like]: `%${search}%` } },
        { phone: { [Op.like]: `%${search}%` } },
      ];
    }

    // 정렬 설정
    const sortColumnMap = {
      name: 'representative',
      company: 'representative',
      count: 'visitor_count',
      date: 'reservation_date',
      docent: 'docent_type',
      time: 'time_slot',
      status: 'status',
    };

    let order = [];
    if (sortBy && sortColumnMap[sortBy]) {
      order.push([sortColumnMap[sortBy], sortOrder === 'asc' ? 'ASC' : 'DESC']);
    } else {
      // 기본 정렬: 최신순
      order = [['created_at', 'DESC']];
    }

    // 예약 목록 조회
    const { count, rows } = await DocentReservation.findAndCountAll({
      where,
      limit,
      offset,
      order,
    });

    // 통계 조회
    const stats = await DocentReservation.findAll({
      attributes: [
        "status",
        [
          require("sequelize").fn("COUNT", require("sequelize").col("id")),
          "count",
        ],
      ],
      group: ["status"],
      raw: true,
    });

    const statistics = {
      total: 0,
      pending: 0,
      approved: 0,
      rejected: 0,
    };

    stats.forEach((stat) => {
      statistics[stat.status] = parseInt(stat.count);
      statistics.total += parseInt(stat.count);
    });

    res.json({
      reservations: rows,
      total: count,
      page,
      totalPages: Math.ceil(count / limit),
      limit,
      statistics,
    });
  } catch (error) {
    console.error("Get reservations error:", error);
    next(error);
  }
};

// 관리자 API: 대시보드용 예약 목록 조회 (cancelled 제외, 통계 포함)
const getReservationsForDashboard = async (req, res, next) => {
  try {
    const { date, docent } = req.query;

    const where = {
      status: { [Op.ne]: "cancelled" },
    };

    if (date) {
      where.reservationDate = date;
    }

    if (docent) {
      where.docentType = docent;
    }

    const reservations = await DocentReservation.findAll({
      where,
      order: [
        ["reservation_date", "ASC"],
        ["time_slot", "ASC"],
        ["created_at", "DESC"],
      ],
    });

    // 통계 조회 (cancelled 제외)
    const stats = await DocentReservation.findAll({
      attributes: [
        "status",
        [
          require("sequelize").fn("COUNT", require("sequelize").col("id")),
          "count",
        ],
      ],
      where: {
        status: { [Op.ne]: "cancelled" },
      },
      group: ["status"],
      raw: true,
    });

    const statistics = {
      total: 0,
      pending: 0,
      approved: 0,
      rejected: 0,
    };

    stats.forEach((stat) => {
      statistics[stat.status] = parseInt(stat.count);
      statistics.total += parseInt(stat.count);
    });

    res.json({ reservations, statistics });
  } catch (error) {
    console.error("Get reservations for dashboard error:", error);
    next(error);
  }
};

// 관리자 API: 예약 상세 조회
const getReservationById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const reservation = await DocentReservation.findByPk(id);

    if (!reservation) {
      return res.status(404).json({ error: "예약 정보를 찾을 수 없습니다." });
    }

    res.json(reservation);
  } catch (error) {
    console.error("Get reservation error:", error);
    next(error);
  }
};

// 관리자 API: 예약 승인
const approveReservation = async (req, res, next) => {
  try {
    const { id } = req.params;

    const reservation = await DocentReservation.findByPk(id);

    if (!reservation) {
      return res.status(404).json({ error: "예약 정보를 찾을 수 없습니다." });
    }

    reservation.status = "approved";
    await reservation.save();

    res.json({
      success: true,
      message: "예약이 승인되었습니다.",
    });
  } catch (error) {
    console.error("Approve reservation error:", error);
    next(error);
  }
};

// 관리자 API: 예약 거절
const rejectReservation = async (req, res, next) => {
  try {
    const { id } = req.params;

    const reservation = await DocentReservation.findByPk(id);

    if (!reservation) {
      return res.status(404).json({ error: "예약 정보를 찾을 수 없습니다." });
    }

    reservation.status = "rejected";
    await reservation.save();

    res.json({
      success: true,
      message: "예약이 거절되었습니다.",
    });
  } catch (error) {
    console.error("Reject reservation error:", error);
    next(error);
  }
};

// 관리자 API: 예약 취소 (삭제 대신 상태 변경)
const cancelReservation = async (req, res, next) => {
  try {
    const { id } = req.params;

    const reservation = await DocentReservation.findByPk(id);

    if (!reservation) {
      return res.status(404).json({ error: "예약 정보를 찾을 수 없습니다." });
    }

    reservation.status = "cancelled";
    await reservation.save();

    res.json({
      success: true,
      message: "예약이 취소되었습니다.",
    });
  } catch (error) {
    console.error("Cancel reservation error:", error);
    next(error);
  }
};

// 관리자 API: 메모 업데이트
const updateMemo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { adminMemo } = req.body;

    const reservation = await DocentReservation.findByPk(id);

    if (!reservation) {
      return res.status(404).json({ error: "예약 정보를 찾을 수 없습니다." });
    }

    reservation.adminMemo = adminMemo;
    await reservation.save();

    res.json({
      success: true,
      message: "메모가 저장되었습니다.",
    });
  } catch (error) {
    console.error("Update memo error:", error);
    next(error);
  }
};

// 관리자 API: 엑셀 내보내기용 전체 데이터 조회
const exportReservations = async (req, res, next) => {
  try {
    const reservations = await DocentReservation.findAll({
      order: [
        ["reservation_date", "ASC"],
        ["time_slot", "ASC"],
        ["created_at", "DESC"],
      ],
    });

    // 엑셀용 데이터 포맷 (Sequelize 모델 객체 사용)
    const exportData = reservations.map((r, index) => {
      const data = r.toJSON();
      return {
        no: index + 1,
        reservationDate: data.reservationDate,
        docentType: data.docentType === "A" ? "영문(A)" : "국문(B)",
        timeSlot: data.timeSlot,
        representative: data.representative,
        contact: data.contact,
        phone: data.phone,
        email: data.email,
        visitorCount: data.visitorCount,
        notes: data.notes || "",
        status:
          data.status === "approved"
            ? "승인 완료"
            : data.status === "rejected"
              ? "승인 거절"
              : data.status === "cancelled"
                ? "신청 취소"
                : "승인 대기",
        adminMemo: data.adminMemo || "",
        createdAt: data.created_at,
      };
    });

    res.json({ reservations: exportData });
  } catch (error) {
    console.error("Export reservations error:", error);
    next(error);
  }
};

module.exports = {
  createReservation,
  getAvailableSlots,
  getReservations,
  getReservationsForDashboard,
  getReservationById,
  approveReservation,
  rejectReservation,
  cancelReservation,
  updateMemo,
  exportReservations,
};
