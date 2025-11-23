'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // 선택적 필드들을 NULL 허용으로 변경
    await queryInterface.changeColumn('applications', 'table_graphic_url', {
      type: Sequelize.STRING(1000),
      allowNull: true
    });
  },

  async down (queryInterface, Sequelize) {
    // Rollback: NOT NULL로 복원
    await queryInterface.changeColumn('applications', 'table_graphic_url', {
      type: Sequelize.STRING(1000),
      allowNull: false
    });
  }
};
