const { User } = require('../../database/models');
const { emailAlreadyRegistered, notFound } = require('../helpers/errorMessages');
const { generateToken } = require('../helpers/jwt');
const { encryptPassword } = require('../helpers/md5');
const { errorResponse, goodResponse } = require('../helpers/response');
const statusCode = require('../helpers/statusCode');

const userData = async (email, password) => {
  try {
    const encryptedPass = encryptPassword(password);
    const userMatch = await User.findOne({ where: { email, password: encryptedPass } });
    const { id, name, role } = userMatch;
    const user = { id, name, email, role };
    const token = generateToken(user);
    return goodResponse(statusCode.OK, { id, name, email, role, token });
  } catch (error) {
    return errorResponse(statusCode.NOT_FOUND, notFound);
  }
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
      const { id, name, email, role } = await User.create(user);
      const token = generateToken({ id, name, email, role });
      return goodResponse(statusCode.CREATED, { id, name, email, role, token });
    }
    return errorResponse(statusCode.BAD_REQUEST, emailAlreadyRegistered);
  } catch (err) {
    return errorResponse(statusCode.INTERNAL_SERVER_ERROR, { error: err });
  }
};

const sellers = async () => {
  const list = await User.findAll({ where: { role: 'seller' } });

  const { id, name, email, role } = list[0];

  return goodResponse(statusCode.OK, { id, name, email, role });
};

module.exports = {
  userData,
  createUser,
  checkEmail,
  sellers,
};
