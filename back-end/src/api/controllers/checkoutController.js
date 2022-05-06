const { sellerList, createSale } = require('../services/checkoutService');

const seller = async (_req, res) => {
  const { status, json } = await sellerList();

  return res.status(status).json(json);
};

const create = async (req, res) => {
  const receivedSale = req.body;

  const { status, json } = await createSale(receivedSale);

  return res.status(status).json(json);
};

module.exports = {
  seller,
  create,
};
