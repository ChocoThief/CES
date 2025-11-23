'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // 1. 새로운 컬럼 2개 추가 (일단 NULL 허용)
    await queryInterface.addColumn('applications', 'company_logo_color_url', {
      type: Sequelize.STRING(500),
      allowNull: true,
      after: 'company_display'
    });

    await queryInterface.addColumn('applications', 'company_logo_white_url', {
      type: Sequelize.STRING(500),
      allowNull: true,
      after: 'company_logo_color_url'
    });

    // 2. 기존 company_logo_url 데이터를 company_logo_color_url로 복사
    await queryInterface.sequelize.query(
      'UPDATE applications SET company_logo_color_url = company_logo_url WHERE company_logo_url IS NOT NULL'
    );

    // 3. company_logo_white_url에 임시 기본값 설정 (기존 데이터 보호)
    await queryInterface.sequelize.query(
      "UPDATE applications SET company_logo_white_url = company_logo_url WHERE company_logo_white_url IS NULL"
    );

    // 4. 기존 company_logo_url 컬럼 삭제
    await queryInterface.removeColumn('applications', 'company_logo_url');

    // 5. NOT NULL 제약조건 추가 (데이터가 있으므로 안전)
    await queryInterface.changeColumn('applications', 'company_logo_color_url', {
      type: Sequelize.STRING(500),
      allowNull: false
    });

    await queryInterface.changeColumn('applications', 'company_logo_white_url', {
      type: Sequelize.STRING(500),
      allowNull: false
    });
  },

  async down (queryInterface, Sequelize) {
    // 롤백: 원래 상태로 되돌림

    // 1. 기존 company_logo_url 컬럼 다시 생성
    await queryInterface.addColumn('applications', 'company_logo_url', {
      type: Sequelize.STRING(500),
      allowNull: true,
      after: 'company_display'
    });

    // 2. company_logo_color_url 데이터를 company_logo_url로 복사
    await queryInterface.sequelize.query(
      'UPDATE applications SET company_logo_url = company_logo_color_url WHERE company_logo_color_url IS NOT NULL'
    );

    // 3. NOT NULL 제약조건 추가
    await queryInterface.changeColumn('applications', 'company_logo_url', {
      type: Sequelize.STRING(500),
      allowNull: false
    });

    // 4. 새로 추가한 컬럼 2개 삭제
    await queryInterface.removeColumn('applications', 'company_logo_color_url');
    await queryInterface.removeColumn('applications', 'company_logo_white_url');
  }
};
