const sequelize = require("../config/database");
const ApplicationModel = require("./Application");
const AdminUserModel = require("./AdminUser");
const DocentReservationModel = require("./DocentReservation");

const Application = ApplicationModel(sequelize);
const AdminUser = AdminUserModel(sequelize);
const DocentReservation = DocentReservationModel(sequelize);

// DB 동기화 함수
const syncDatabase = async (force = false, alter = false) => {
  try {
    await sequelize.authenticate();
    console.log("✓ Database connection established successfully.");

    await sequelize.sync({ force, alter });
    console.log("✓ Database synchronized successfully.");

    return true;
  } catch (error) {
    console.error("✗ Unable to connect to the database:", error);
    throw error;
  }
};

module.exports = {
  sequelize,
  Application,
  AdminUser,
  DocentReservation,
  syncDatabase,
};
