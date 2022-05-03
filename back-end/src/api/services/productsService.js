const { Product } = require('../../database/models');
const { errorResponse, goodResponse } = require('../helpers/response');
const { OK, INTERNAL_SERVER_ERROR } = require('../helpers/statusCode');

const getAll = async () => {
  try {
    const allProducts = await Product.findAll();
    return goodResponse(OK, allProducts);
  } catch (err) {
    return errorResponse(INTERNAL_SERVER_ERROR, err);
  }
};

module.exports = {
  getAll,
};
