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
<<<<<<< HEAD
    const { email } = await decoder(token);
    const { id } = await User.findOne({ where: { email } });
    // Alterei o user_id para userId pra poder passar no ESlint
    const orders = await Sale.findAll({ where: { userId: id } });
    return goodResponse(OK, orders);
=======
    const { id } = await decoder(token);
    const orders = await Sale.findAll({ where: { userId: id } });

    return goodResponse(statusCode.OK, filterArrayDate(orders));
>>>>>>> 238031839a3bda85d2a0a122468c87875f51e9fd
  } catch (err) {
    return errorResponse(statusCode.INTERNAL_SERVER_ERROR, { error: err });
  }
};

<<<<<<< HEAD
=======
const createSale = async (receivedSale, token) => {
  const { id } = await decoder(token);
  const create = await Sale.create({ ...receivedSale, userId: id });
  const createSaleProducts = receivedSale.products.map(async ({ productId, quantity }) => (
    SaleProduct.create({ saleId: create.id, productId, quantity })));
  create.dataValues.date = filterDate(create.saleDate);
  create.products = await Promise.all(createSaleProducts);
  return goodResponse(statusCode.OK, create);
};

>>>>>>> 238031839a3bda85d2a0a122468c87875f51e9fd
module.exports = {
  getOrderById,
  getAllByUserId,
  createSale,
};
