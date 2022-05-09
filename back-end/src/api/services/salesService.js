/* eslint-disable camelcase */
const { Sale, SaleProduct, Product } = require('../../database/models');
const { errorResponse, goodResponse } = require('../helpers/response');
const { decoder } = require('../helpers/jwt');
const statusCode = require('../helpers/statusCode');
const { filterDate, filterArrayDate } = require('../helpers/filterDate');
const productDataProcessing = require('../helpers/productDataProcessing');

const getOrderById = async (id) => {
  try {
    const product = await Sale.findOne({
      where: { id },
      include: [
        { model: Product, as: 'products', through: { attributes: ['quantity'] } },
      ],
    });

    return goodResponse(statusCode.OK, productDataProcessing(product));
  } catch (err) {
    return errorResponse(statusCode.INTERNAL_SERVER_ERROR, { error: err });
  }
};

const getAllByUserId = async (token) => {
  try {
    const { id } = await decoder(token);
    const orders = await Sale.findAll({ where: { user_id: id } });

    return goodResponse(statusCode.OK, filterArrayDate(orders));
  } catch (err) {
    return errorResponse(statusCode.INTERNAL_SERVER_ERROR, { error: err });
  }
};

const createSale = async (receivedSale, token) => {
  const { id } = await decoder(token);
  const create = await Sale.create({ ...receivedSale, userId: id });
  const createSaleProducts = receivedSale.products.map(async ({ productId, quantity }) => (
    SaleProduct.create({ saleId: create.id, productId, quantity })));
  create.dataValues.date = filterDate(create.saleDate);
  create.products = await Promise.all(createSaleProducts);
  return goodResponse(statusCode.OK, create);
};

module.exports = {
  getOrderById,
  getAllByUserId,
  createSale,
};
