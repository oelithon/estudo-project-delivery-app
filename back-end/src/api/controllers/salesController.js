const { getOrderById: getOrder, getAllByUserId, editSale } = require('../services/salesService');

const getOrderById = async (req, res) => {
  const token = req.headers.authorization;
  const { id } = req.params;
  const { status, json } = await getOrder(id, token);
  return res.status(status).json(json);
};

const getOrders = async (req, res) => {
  const token = req.headers.authorization;
  const { status, json } = await getAllByUserId(token);
  return res.status(status).json(json);
};

const editOrderById = async (req, res) => {
  const token = req.headers.authorization;
  const { id } = req.params;
  const { status, json } = await editSale(id, token);
  return res.status(status).json(json);
};

module.exports = {
  getOrderById, 
  getOrders,
  editOrderById,
};
