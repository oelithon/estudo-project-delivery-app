/* eslint-disable camelcase */
const { Sale } = require('../../database/models');
const { errorResponse, goodResponse } = require('../helpers/response');
const { decoder } = require('../helpers/jwt');
const statusCode = require('../helpers/statusCode');
const filterDate = require('../helpers/filterDate');

const getItemById = async (id) => {
  try {
    const product = await Sale.findByPk(id);
    return goodResponse(statusCode.OK, product);
  } catch (err) {
    return errorResponse(statusCode.INTERNAL_SERVER_ERROR, err);
  }
};

const getAllByUserId = async (token) => {
  try {
    const { id } = await decoder(token);
    // const { id } = await User.findOne({ where: { email } });
    const orders = await Sale.findAll({ where: { user_id: id } });
    return goodResponse(statusCode.OK, orders);
  } catch (err) {
    console.log(err);
    return errorResponse(statusCode.INTERNAL_SERVER_ERROR, err);
  }
};

const createSale = async (receivedSale) => {
  const create = await Sale.create(receivedSale);
  create.dataValues.date = filterDate(create.saleDate);

  return goodResponse(statusCode.OK, create);
};

module.exports = {
  getItemById,
  getAllByUserId,
  createSale,
};
