const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Application = sequelize.define('Application', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    // 부스 정보
    boothType: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'booth_type',
      validate: {
        isIn: [['eureka', 'global']]
      }
    },
    boothNumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'booth_number'
    },

    // 회사 정보
    companyKr: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'company_kr'
    },
    companyEn: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'company_en'
    },
    ceoKr: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'ceo_kr'
    },
    ceoEn: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'ceo_en'
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'website'
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'phone'
    },
    addressKr: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'address_kr'
    },
    addressEn: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'address_en'
    },

    // 담당자 정보
    contactName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'contact_name'
    },
    contactPosition: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'contact_position'
    },
    department: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'department'
    },
    contactMobile: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'contact_mobile'
    },

    // 홍보 정보
    companyDisplay: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'company_display'
    },

    // 파일 URL
    companyLogoUrl: {
      type: DataTypes.STRING(500),
      allowNull: false,
      field: 'company_logo_url'
    },
    promoGraphicUrl: {
      type: DataTypes.STRING(500),
      allowNull: false,
      field: 'promo_graphic_url'
    },
    tableGraphicUrl: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'table_graphic_url'
    },
    qrFileUrl: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'qr_file_url'
    },
    videoFileUrl: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'video_file_url'
    },

    // 옵션
    qrCode: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: 'none',
      field: 'qr_code',
      validate: {
        isIn: [['none', 'have']]
      }
    },
    promoVideo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: 'none',
      field: 'promo_video',
      validate: {
        isIn: [['none', 'have']]
      }
    },

    // 참여 프로그램
    pitching: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: 'no',
      field: 'pitching',
      validate: {
        isIn: [['yes', 'no']]
      }
    },
    docent: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: 'no',
      field: 'docent',
      validate: {
        isIn: [['yes', 'no']]
      }
    },
    interpreter: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: 'no',
      field: 'interpreter',
      validate: {
        isIn: [['yes', 'no']]
      }
    },
    mou: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: 'no',
      field: 'mou',
      validate: {
        isIn: [['yes', 'no']]
      }
    }
  }, {
    tableName: 'applications',
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  return Application;
};
