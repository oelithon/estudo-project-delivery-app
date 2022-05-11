<<<<<<< HEAD
<<<<<<< HEAD
const fs = require('fs');

const JWT_SECRET = fs.readFileSync('jwt.evaluation.key', 'utf8');

const jwt = require('jsonwebtoken');

=======
const { invalidCredentials, tokenIsRequired } = require('../helpers/errorMessages');
const { decoder } = require('../helpers/jwt');
>>>>>>> 238031839a3bda85d2a0a122468c87875f51e9fd
=======
const { invalidCredentials, tokenIsRequired } = require('../helpers/errorMessages');
const { decoder } = require('../helpers/jwt');
>>>>>>> main-group-1-feat-checkout-details-components-front
const { NOT_FOUND, UNAUTHORIZED } = require('../helpers/statusCode');

async function validToken(request, response, next) {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(NOT_FOUND).json(tokenIsRequired);
  }
  const { error } = await decoder(token);
  if (error) return response.status(UNAUTHORIZED).json(invalidCredentials);
  next();
}

module.exports = {
  validToken,
}; 
