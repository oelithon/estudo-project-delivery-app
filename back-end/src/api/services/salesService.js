/* eslint-disable camelcase */
const { Sale } = require('../../database/models');
const { errorResponse, goodResponse } = require('../helpers/response');
const { OK, INTERNAL_SERVER_ERROR } = require('../helpers/statusCode');
const { decoder } = require('../helpers/jwt');

const getItemById = async (id) => {
  try {
    const product = await Sale.findByPk(id);
    return goodResponse(OK, product);
  } catch (err) {
    return errorResponse(INTERNAL_SERVER_ERROR, err);
  }
};

const getAllByUserId = async (token) => {
  try {
    const { id } = await decoder(token);
    // const { id } = await User.findOne({ where: { email } });
    const orders = await Sale.findAll({ where: { user_id: id } });
    return goodResponse(OK, orders);
  } catch (err) {
    console.log(err);
    return errorResponse(INTERNAL_SERVER_ERROR, err);
  }
};

module.exports = {
  getItemById,
  getAllByUserId,
};
