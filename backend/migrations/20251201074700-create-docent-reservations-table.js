'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('docent_reservations', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      reservation_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      docent_type: {
        type: Sequelize.ENUM('A', 'B'),
        allowNull: false,
        comment: 'A: 영문, B: 국문',
      },
      time_slot: {
        type: Sequelize.STRING(5),
        allowNull: false,
        comment: '11:00, 14:00, 15:00, 16:00',
      },
      status: {
        type: Sequelize.ENUM('pending', 'approved', 'rejected'),
        allowNull: false,
        defaultValue: 'pending',
      },
      representative: {
        type: Sequelize.STRING(100),
        allowNull: false,
        comment: '방문자 대표명/직함',
      },
      contact: {
        type: Sequelize.STRING(100),
        allowNull: false,
        comment: '현장 컨택 실무자명/직함',
      },
      phone: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      visitor_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment: '참여자 명단, 기타 참고사항',
      },
      admin_memo: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('docent_reservations');
  }
};
