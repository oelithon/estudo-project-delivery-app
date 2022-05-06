const { Sale, User } = require('../../database/models');
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
    const { email } = await decoder(token);
    const { id } = await User.findOne({ where: { email } });
<<<<<<< HEAD
    // Alterei o user_id para userId pra poder passar no ESlint
=======
>>>>>>> origin/main-group-1-feat-deliverycard-component
    const orders = await Sale.findAll({ where: { userId: id } });
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
