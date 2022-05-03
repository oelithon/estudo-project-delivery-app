const { createUser: create } = require('../services/userService');

const createUser = async (req, res) => {
  const { status, json } = await create(req.body);
  return res.status(status).json(json);
};

module.exports = {
  createUser,
};
