const jwt = require('jsonwebtoken');
const fs = require('fs');

const jwtConfig = {
  algorithm: 'HS256',
};

const JWT_SECRET = fs.readFileSync('jwt.evaluation.key', 'utf8');

const generateToken = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, jwtConfig);
  return token;
};

const decoder = async (token) => {
  const decoded = await jwt.verify(token, JWT_SECRET);
  return decoded;
};

module.exports = {
  generateToken,
  decoder,
};
