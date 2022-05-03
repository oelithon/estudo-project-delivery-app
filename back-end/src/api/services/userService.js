const { User } = require('../../database/models');
const { generateToken } = require('../helpers/jwt');
const { encryptPassword } = require('../helpers/md5');
const { errorResponse, goodResponse } = require('../helpers/response');
const { CREATED, INTERNAL_SERVER_ERROR } = require('../helpers/statusCode');

const loginUser = async (email, password) => {
  const userData = await User.findOne({ where: { email, password } });

  return userData;
};

const createUser = async (body) => {
  const user = body;
  try {
    user.password = encryptPassword(body.password);
    const created = await User.create(user);
    const token = generateToken(created.id);
    return goodResponse(CREATED, { ...created.dataValues, token });
  } catch (err) {
    return errorResponse(INTERNAL_SERVER_ERROR, err);
  }
};

module.exports = {
  loginUser,
  createUser,
};
