const { getOrderById: getOrder, getAllByUserId, createSale } = require('../services/salesService');

const getOrderById = async (req, res) => {
  const { id } = req.params;
  const { status, json } = await getOrder(id);
  return res.status(status).json(json);
};

const getOrders = async (req, res) => {
  const token = req.headers.authorization;
  const { status, json } = await getAllByUserId(token);
  return res.status(status).json(json);
};

const createNewSale = async (req, res) => {
  const receivedSale = req.body;
  const token = req.headers.authorization;
  const { status, json } = await createSale(receivedSale, token);

  return res.status(status).json(json);
};

module.exports = {
  getOrderById,
  getOrders,
  createNewSale,
};
