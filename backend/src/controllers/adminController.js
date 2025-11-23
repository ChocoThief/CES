const { Application } = require('../models');
const { Op } = require('sequelize');

const getApplications = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const search = req.query.search || '';
    const offset = (page - 1) * limit;

    const where = {};
    if (search) {
      where[Op.or] = [
        { companyKr: { [Op.like]: `%${search}%` } },
        { companyEn: { [Op.like]: `%${search}%` } },
        { boothNumber: { [Op.like]: `%${search}%` } }
      ];
    }

    const { count, rows } = await Application.findAndCountAll({
      where,
      limit,
      offset,
      order: [['created_at', 'DESC']],
      attributes: [
        'id', 'boothType', 'boothNumber',
        'companyKr', 'companyEn',
        'pitching', 'docent', 'interpreter', 'mou',
        ['created_at', 'createdAt']
      ]
    });

    res.json({
      applications: rows,
      total: count,
      page,
      totalPages: Math.ceil(count / limit),
      limit
    });
  } catch (error) {
    console.error('Get applications error:', error);
    res.status(500).json({ error: error.message });
  }
};

const getApplicationById = async (req, res) => {
  try {
    const { id } = req.params;

    const application = await Application.findByPk(id);

    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }

    res.json(application);
  } catch (error) {
    console.error('Get application error:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getApplications,
  getApplicationById
};
