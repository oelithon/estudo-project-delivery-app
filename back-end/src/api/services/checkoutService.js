const { User } = require('../../database/models');
const { goodResponse } = require('../helpers/response');
const statusCode = require('../helpers/statusCode');

const sellerList = async () => {
  const list = await User.findAll({ where: { role: 'customer' } });

  return goodResponse(statusCode.OK, list);
};

module.exports = {
  sellerList,
};
