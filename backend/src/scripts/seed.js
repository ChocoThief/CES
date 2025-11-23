require("dotenv").config();
const { AdminUser, syncDatabase } = require("../models");

const seedAdminUsers = async () => {
  try {
    await syncDatabase();

    console.log("\n=== Seeding Admin Users ===\n");

    // 환경변수 확인
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminUsername || !adminEmail || !adminPassword) {
      console.error("✗ Missing required environment variables:");
      console.error("  ADMIN_USERNAME, ADMIN_EMAIL, ADMIN_PASSWORD");
      console.error("  Please set them in .env file");
      process.exit(1);
    }

    // 기본 'admin' 계정이 있으면 삭제
    const defaultAdmin = await AdminUser.findOne({
      where: { username: "admin" },
    });
    if (defaultAdmin) {
      await defaultAdmin.destroy();
      console.log("✓ Removed default admin account");
    }

    // 환경변수로 설정된 계정이 이미 있는지 확인
    const existingAdmin = await AdminUser.findOne({
      where: { username: adminUsername },
    });

    if (existingAdmin) {
      // 기존 계정이 있으면 비밀번호만 업데이트
      existingAdmin.password = adminPassword;
      await existingAdmin.save();
      console.log("✓ Admin user password updated");
      console.log(`  Username: ${adminUsername}`);
      console.log(`  Email: ${existingAdmin.email}\n`);
    } else {
      // 새 관리자 계정 생성
      const admin = await AdminUser.create({
        username: adminUsername,
        email: adminEmail,
        password: adminPassword, // 비밀번호는 bcrypt로 자동 해싱됨
      });

      console.log("✓ Admin user created successfully!");
      console.log(`  Username: ${admin.username}`);
      console.log(`  Email: ${admin.email}\n`);
    }

    console.log("⚠️  Keep your admin credentials secure!\n");

    process.exit(0);
  } catch (error) {
    console.error("✗ Error seeding admin users:", error.message);
    process.exit(1);
  }
};

seedAdminUsers();
