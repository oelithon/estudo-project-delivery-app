const jwt = require('jsonwebtoken');
const fs = require('fs');

const jwtConfig = {
  algorithm: 'HS256',
};

const JWT_SECRET = fs.readFileSync('jwt.evaluation.key', 'utf8');

const generateToken = (data) => {
  const token = jwt.sign(data, JWT_SECRET, jwtConfig);
  return token;
};

const decoder = async (token) => {
  const decoded = await jwt.verify(token, JWT_SECRET);
  return decoded.user;
};

module.exports = {
  generateToken,
  decoder,
};