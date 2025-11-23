const jwt = require('jsonwebtoken');
const { AdminUser } = require('../models');
require('dotenv').config();

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: '아이디와 비밀번호를 입력해주세요.' });
    }

    // 사용자 찾기
    const user = await AdminUser.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ error: '아이디 또는 비밀번호가 올바르지 않습니다.' });
    }

    // 비밀번호 검증
    const isValid = await user.validatePassword(password);

    if (!isValid) {
      return res.status(401).json({ error: '아이디 또는 비밀번호가 올바르지 않습니다.' });
    }

    // JWT 생성
    const token = jwt.sign(
      { id: user.id, username: user.username, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: '로그인 처리 중 오류가 발생했습니다.' });
  }
};

const getCurrentUser = async (req, res) => {
  try {
    const user = await AdminUser.findByPk(req.user.id, {
      attributes: ['id', 'username', 'email']
    });

    if (!user) {
      return res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });
    }

    res.json(user);
  } catch (error) {
    console.error('Get current user error:', error);
    res.status(500).json({ error: '사용자 정보를 불러오는데 실패했습니다.' });
  }
};

module.exports = {
  login,
  getCurrentUser
};
