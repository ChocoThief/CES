'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // time_slot 컬럼 길이 확장 (5 -> 20)
    await queryInterface.changeColumn('docent_reservations', 'time_slot', {
      type: Sequelize.STRING(20),
      allowNull: false,
      comment: '10:00 ~ 10:30, 10:30 ~ 11:00, etc.',
    });
  },

  async down(queryInterface, Sequelize) {
    // Rollback: 길이 복원
    await queryInterface.changeColumn('docent_reservations', 'time_slot', {
      type: Sequelize.STRING(5),
      allowNull: false,
      comment: '11:00, 14:00, 15:00, 16:00',
    });
  },
};
