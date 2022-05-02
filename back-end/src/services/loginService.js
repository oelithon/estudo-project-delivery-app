const { User } = require('../database/models/User');

const loginUser = async (email, password) => {
  const userData = await User.findOne({ where: { email, password } });

  return userData;
};

module.exports = {
  loginUser,
};
