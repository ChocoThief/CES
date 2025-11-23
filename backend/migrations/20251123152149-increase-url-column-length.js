'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // 모든 URL 컬럼의 길이를 VARCHAR(500)에서 VARCHAR(1000)으로 증가
    await queryInterface.changeColumn('applications', 'company_logo_color_url', {
      type: Sequelize.STRING(1000),
      allowNull: false
    });

    await queryInterface.changeColumn('applications', 'company_logo_white_url', {
      type: Sequelize.STRING(1000),
      allowNull: false
    });

    await queryInterface.changeColumn('applications', 'promo_graphic_url', {
      type: Sequelize.STRING(1000),
      allowNull: false
    });

    await queryInterface.changeColumn('applications', 'table_graphic_url', {
      type: Sequelize.STRING(1000),
      allowNull: false
    });

    await queryInterface.changeColumn('applications', 'qr_file_url', {
      type: Sequelize.STRING(1000),
      allowNull: true
    });

    await queryInterface.changeColumn('applications', 'video_file_url', {
      type: Sequelize.STRING(1000),
      allowNull: true
    });
  },

  async down (queryInterface, Sequelize) {
    // Rollback: VARCHAR(1000)에서 VARCHAR(500)으로 복원
    await queryInterface.changeColumn('applications', 'company_logo_color_url', {
      type: Sequelize.STRING(500),
      allowNull: false
    });

    await queryInterface.changeColumn('applications', 'company_logo_white_url', {
      type: Sequelize.STRING(500),
      allowNull: false
    });

    await queryInterface.changeColumn('applications', 'promo_graphic_url', {
      type: Sequelize.STRING(500),
      allowNull: false
    });

    await queryInterface.changeColumn('applications', 'table_graphic_url', {
      type: Sequelize.STRING(500),
      allowNull: false
    });

    await queryInterface.changeColumn('applications', 'qr_file_url', {
      type: Sequelize.STRING(500),
      allowNull: true
    });

    await queryInterface.changeColumn('applications', 'video_file_url', {
      type: Sequelize.STRING(500),
      allowNull: true
    });
  }
};
