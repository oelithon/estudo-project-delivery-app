const { userData } = require('../services/userService');
const { generateToken } = require('../helpers/jwt');
const statusCode = require('../helpers/statusCode');

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userData(email, password);
    const token = generateToken(user);

    return res.status(statusCode.OK).json(token);
  } catch (error) {
    const message = { message: '401 - Not Found' };

    return res.status(statusCode.NOT_FOUND).json(message);
  }
};

module.exports = {
  loginUser,
};
