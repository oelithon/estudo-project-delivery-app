const { sellerList } = require('../services/checkoutService');

const seller = async (_req, res) => {
  const { status, json } = await sellerList();

  return res.status(status).json(json);
};

module.exports = {
  seller,
};
