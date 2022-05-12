const { invalidCredentials, tokenIsRequired } = require('../helpers/errorMessages');
const { decoder } = require('../helpers/jwt');
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
