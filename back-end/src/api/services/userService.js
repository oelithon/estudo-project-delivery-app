const { User } = require('../../database/models');
const { emailAlreadyRegistered } = require('../helpers/errorMessages');
const { generateToken } = require('../helpers/jwt');
const { encryptPassword } = require('../helpers/md5');
const { errorResponse, goodResponse } = require('../helpers/response');
const { CREATED, INTERNAL_SERVER_ERROR, BAD_REQUEST } = require('../helpers/statusCode');

const userData = async (email, password) => {
  const encryptedPass = encryptPassword(password);
  const userMatch = await User.findOne({ where: { email, password: encryptedPass } });
  const { name, role } = userMatch;
  const user = { name, email, role };

  return user;
};

const checkEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return !user === false;
};

const createUser = async (body) => {
  const user = body;
  user.password = encryptPassword(body.password);
  try {
    if (!await checkEmail(user.email)) {
      const created = await User.create(user);
      const token = generateToken(created.id);
      return goodResponse(CREATED, { ...created.dataValues, token });
    }
    return errorResponse(BAD_REQUEST, emailAlreadyRegistered);
  } catch (err) {
    return errorResponse(INTERNAL_SERVER_ERROR, err);
  }
};

module.exports = {
  userData,
  createUser,
  checkEmail,
};
