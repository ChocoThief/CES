const { AdminUser, syncDatabase } = require('../models');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

const createAdmin = async () => {
  try {
    await syncDatabase();

    console.log('\n=== Create Admin User ===\n');

    const username = await question('Username: ');
    const email = await question('Email: ');
    const password = await question('Password: ');

    if (!username || !email || !password) {
      console.error('✗ All fields are required');
      process.exit(1);
    }

    const admin = await AdminUser.create({
      username,
      email,
      password
    });

    console.log(`\n✓ Admin user created successfully!`);
    console.log(`  ID: ${admin.id}`);
    console.log(`  Username: ${admin.username}`);
    console.log(`  Email: ${admin.email}\n`);

    process.exit(0);
  } catch (error) {
    console.error('✗ Error creating admin:', error.message);
    process.exit(1);
  }
};

createAdmin();
