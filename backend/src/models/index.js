const sequelize = require('../config/database');
const ApplicationModel = require('./Application');
const AdminUserModel = require('./AdminUser');

const Application = ApplicationModel(sequelize);
const AdminUser = AdminUserModel(sequelize);

// DB 동기화 함수
const syncDatabase = async (force = false) => {
  try {
    await sequelize.authenticate();
    console.log('✓ Database connection established successfully.');

    await sequelize.sync({ force });
    console.log('✓ Database synchronized successfully.');

    return true;
  } catch (error) {
    console.error('✗ Unable to connect to the database:', error);
    throw error;
  }
};

module.exports = {
  sequelize,
  Application,
  AdminUser,
  syncDatabase
};
