"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("docent_reservations", "interests", {
      type: Sequelize.STRING(255),
      allowNull: true,
      comment: "관심 분야 (영문)",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("docent_reservations", "interests");
  },
};
