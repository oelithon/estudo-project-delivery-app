const emailAlreadyRegistered = { error: 'Email already registered' };
const tokenIsRequired = { error: 'token is required!' };
const invalidCredentials = { errro: 'Invalid credentials!' };
const notFound = { error: '401 - Not Found' };
const editingNotAllowed = { error: 'Editing not allowed' };

module.exports = {
  emailAlreadyRegistered,
  tokenIsRequired,
  invalidCredentials,
  notFound,
  editingNotAllowed,
};
