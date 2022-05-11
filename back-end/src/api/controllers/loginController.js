const { userData } = require('../services/userService');

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const { status, json } = await userData(email, password);
  return res.status(status).json(json);
};

module.exports = {
  loginUser,
};
