const { Sale, SaleProduct, Product, User } = require('../../database/models');
const { errorResponse, goodResponse } = require('../helpers/response');
const { decoder } = require('../helpers/jwt');
const statusCode = require('../helpers/statusCode');
const { filterDate, filterArrayDate } = require('../helpers/filterDate');
const productDataProcessing = require('../helpers/productDataProcessing');
const { BAD_REQUEST, OK } = require('../helpers/statusCode');
const { editingNotAllowed } = require('../helpers/errorMessages');

const arrayStatus = ['Pendente', 'Preparando', 'Em Trânsito', 'Entregue'];

const findOneOrder = async (param) => {
  const order = await Sale.findOne({
    where: param,
    include: [
      { model: User, as: 'seller', attributes: { exclude: ['password', 'role', 'email', 'id'] } },
      { model: Product, as: 'products' },
    ],
  });
  return order;
};

const getOrderById = async (id, token) => {
  const { id: $id, role } = await decoder(token);
  const userType = role === 'customer' ? { userId: $id } : { sellerId: $id };
  try {
    const order = await findOneOrder({ id, ...userType });
    return goodResponse(statusCode.OK, productDataProcessing(order));
  } catch (err) {
    console.log(err);
    return errorResponse(statusCode.INTERNAL_SERVER_ERROR, { error: err });
  }
};
const getAllByUserId = async (token) => {
  try {
    const { id, role } = await decoder(token);
    const userType = role === 'customer' ? { userId: id } : { sellerId: id };

    const orders = await Sale.findAll({ where: { ...userType } });
    return goodResponse(statusCode.OK, filterArrayDate(orders));
  } catch (err) {
    return errorResponse(statusCode.INTERNAL_SERVER_ERROR, { error: err });
  }
};

const createSaleProduct = async (receivedSale, create) => {
  const createSaleProducts = receivedSale.products.map(async ({ productId, quantity }) => (
    SaleProduct.create({ saleId: create.id, productId, quantity })));

  await Promise.all(createSaleProducts);
};

const createSale = async (receivedSale, token) => {
  const { id } = await decoder(token);
  const create = await Sale.create({ ...receivedSale, userId: id });
  await createSaleProduct(receivedSale, create);
  create.dataValues.date = filterDate(create.saleDate);
  return goodResponse(statusCode.CREATED, create);
};

const editStatusSale = async (status, id) => {
  const index = arrayStatus.findIndex((string) => string === status);
  await Sale.update(
    { status: arrayStatus[index + 1] },
    { where: { id } },
  );
};

const editStatusByUser = async (order, $id) => {
  const { id, userId, status } = order;
  if (userId === $id && status === arrayStatus[2]) {
    await editStatusSale(status, id);
    return true;
  }
  return false;
};

const editStatusBySeller = async (order, $id) => {
  const { id, sellerId, status } = order;
  if (sellerId === $id && status !== arrayStatus[2] && status !== arrayStatus[3]) {
    await editStatusSale(status, id);
    return true;
  }
  return false;
};

const editStatus = async (order, $id) => {
  const edited = await editStatusByUser(order, $id) || await editStatusBySeller(order, $id);
  if (edited) {
    const editedOrder = await findOneOrder(order.id);
    return goodResponse(OK, editedOrder);
  }
  return errorResponse(BAD_REQUEST, editingNotAllowed);
};

const editSale = async (id, token) => {
  const { id: $id, role } = await decoder(token);
  const userType = role === 'customer' ? { userId: $id } : { sellerId: $id };
  const order = await findOneOrder({ id, ...userType });
  const response = await editStatus(order, $id);
  return response;
};

module.exports = {
  getOrderById,
  getAllByUserId,
  createSale,
  editSale,
  createSaleProduct,
};
