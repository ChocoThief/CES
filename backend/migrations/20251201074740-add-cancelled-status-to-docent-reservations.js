'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // status ENUM에 'cancelled' 추가
    await queryInterface.sequelize.query(`
      ALTER TABLE docent_reservations
      MODIFY COLUMN status ENUM('pending', 'approved', 'rejected', 'cancelled') NOT NULL DEFAULT 'pending'
    `);
  },

  async down(queryInterface, Sequelize) {
    // cancelled 상태인 레코드가 있으면 pending으로 변경 후 ENUM 롤백
    await queryInterface.sequelize.query(`
      UPDATE docent_reservations SET status = 'pending' WHERE status = 'cancelled'
    `);
    await queryInterface.sequelize.query(`
      ALTER TABLE docent_reservations
      MODIFY COLUMN status ENUM('pending', 'approved', 'rejected') NOT NULL DEFAULT 'pending'
    `);
  }
};
