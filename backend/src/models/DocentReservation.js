const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const DocentReservation = sequelize.define(
    "DocentReservation",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      // 예약 정보
      reservationDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: "reservation_date",
      },
      docentType: {
        type: DataTypes.ENUM("A", "B"),
        allowNull: false,
        field: "docent_type",
        comment: "A: 영문, B: 국문",
      },
      timeSlot: {
        type: DataTypes.STRING(5),
        allowNull: false,
        field: "time_slot",
        comment: "11:00, 14:00, 15:00, 16:00",
      },
      status: {
        type: DataTypes.ENUM("pending", "approved", "rejected", "cancelled"),
        allowNull: false,
        defaultValue: "pending",
        field: "status",
      },

      // 방문자 정보
      representative: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "representative",
        comment: "방문자 대표명/직함",
      },
      contact: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "contact",
        comment: "현장 컨택 실무자명/직함",
      },
      phone: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: "phone",
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "email",
      },
      visitorCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "visitor_count",
        validate: {
          min: 1,
        },
      },
      notes: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: "notes",
        comment: "참여자 명단, 기타 참고사항",
      },

      // 관리자 메모
      adminMemo: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: "admin_memo",
      },
    },
    {
      tableName: "docent_reservations",
      timestamps: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  );

  return DocentReservation;
};
