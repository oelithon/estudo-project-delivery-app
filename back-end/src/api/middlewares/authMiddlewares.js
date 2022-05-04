const fs = require('fs');

const JWT_SECRET = fs.readFileSync('jwt.evaluation.key', 'utf8');

const jwt = require('jsonwebtoken');

const { NOT_FOUND, UNAUTHORIZED } = require('../helpers/statusCode');

function validToken(request, response, next) {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(NOT_FOUND).json('token is required!');
  }
  try {
    jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] });
  } catch (error) {
    return response.status(UNAUTHORIZED).json('Invalid credentials!');
  }

  next();
}

module.exports = {
  validToken,
}; 