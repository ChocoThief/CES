'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('applications', 'promo_video', {
      type: Sequelize.STRING(10),
      allowNull: true,
      defaultValue: 'none'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('applications', 'promo_video', {
      type: Sequelize.STRING(10),
      allowNull: false,
      defaultValue: 'none'
    });
  }
};
