const { AdminUser, syncDatabase } = require('../models');

const seedAdminUsers = async () => {
  try {
    await syncDatabase();

    console.log('\n=== Seeding Admin Users ===\n');

    // 기존 관리자 확인
    const existingAdmin = await AdminUser.findOne({ where: { username: 'admin' } });

    if (existingAdmin) {
      console.log('✓ Admin user already exists. Skipping seed.');
      process.exit(0);
    }

    // 기본 관리자 계정 생성
    const admin = await AdminUser.create({
      username: 'admin',
      email: 'admin@ces.com',
      password: 'admin123'  // 비밀번호는 bcrypt로 자동 해싱됨
    });

    console.log('✓ Admin user created successfully!');
    console.log(`  Username: ${admin.username}`);
    console.log(`  Email: ${admin.email}`);
    console.log(`  Password: admin123`);
    console.log('\n⚠️  Please change the default password after first login!\n');

    process.exit(0);
  } catch (error) {
    console.error('✗ Error seeding admin users:', error.message);
    process.exit(1);
  }
};

seedAdminUsers();
