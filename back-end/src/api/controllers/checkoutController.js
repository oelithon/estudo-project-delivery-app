const { sellerList } = require('../services/checkoutService');

const seller = async () => {
  const list = await sellerList();

  return list;
};

module.exports = {
  seller,
};
