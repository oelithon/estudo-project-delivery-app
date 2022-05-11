const { sellerList } = require('../services/userService');
const { createSale } = require('../services/salesService');

const seller = async (_req, res) => {
  const { status, json } = await sellerList();

  return res.status(status).json(json);
};

const create = async (req, res) => {
  const receivedSale = req.body;
  const token = req.headers.authorization;
  const { status, json } = await createSale(receivedSale, token);

  return res.status(status).json(json);
};

module.exports = {
  seller,
  create,
};
