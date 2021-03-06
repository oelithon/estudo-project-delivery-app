const {
  createUser: create,
  getAllSellers: getSellers,
  getAllUsers: getAll } = require('../services/userService');

const createUser = async (req, res) => {
  const { status, json } = await create(req.body);
  return res.status(status).json(json);
};

const getAllSellers = async (_req, res) => {
  const { status, json } = await getSellers();
  return res.status(status).json(json);
};

const getAllUsers = async (req, res) => {
  const token = req.headers.authorization;
  const { status, json } = await getAll(token);
  return res.status(status).json(json);
};

module.exports = {
  createUser,
  getAllSellers,
  getAllUsers,
};
