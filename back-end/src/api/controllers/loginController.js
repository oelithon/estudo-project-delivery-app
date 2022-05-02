const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const { User } = require('../../services/userService');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const userData = await User(email, password);

  const token = jwt.sign({ userData }, secret, jwtConfig);

  return res.status(200).json({ token });
};

module.exports = {
  loginUser,
};
