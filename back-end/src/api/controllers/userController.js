const { createUser: create, sellers } = require('../services/userService');

const createUser = async (req, res) => {
  const { status, json } = await create(req.body);
  return res.status(status).json(json);
};

const getAllSellers = async (_req, res) => {
  const { status, json } = await sellers();

  return res.status(status).json(json);
};

module.exports = {
  createUser,
  getAllSellers,
};
