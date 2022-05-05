const { User } = require('../../database/models');
const { goodResponse } = require('../helpers/response');
const statusCode = require('../helpers/statusCode');

const sellerList = async () => {
  const list = await User.findAll({ where: { role: 'customer' } });

  const { id, name, email, role } = list[0];

  return goodResponse(statusCode.OK, { id, name, email, role });
};

module.exports = {
  sellerList,
};
