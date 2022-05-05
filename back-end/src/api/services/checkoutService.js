const { User, Sale } = require('../../database/models');
const { goodResponse } = require('../helpers/response');
const statusCode = require('../helpers/statusCode');

const sellerList = async () => {
  const list = await User.findAll({ where: { role: 'seller' } });

  const { id, name, email, role } = list[0];

  return goodResponse(statusCode.OK, { id, name, email, role });
};

const createSale = async (receivedSale) => {
  const {
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status,
  } = receivedSale;

  const create = await Sale.create(
    {
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status,
    },
  );

  return create;
};

module.exports = {
  sellerList,
  createSale,
};
