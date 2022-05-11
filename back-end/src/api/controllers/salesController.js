const { getOrderById: getOrder, getAllByUserId, createSale } = require('../services/salesService');

<<<<<<< HEAD
<<<<<<< HEAD
const getItem = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { status, json } = await getItemById(id);
=======
const getOrderById = async (req, res) => {
  const { id } = req.params;
  const { status, json } = await getOrder(id);
>>>>>>> 238031839a3bda85d2a0a122468c87875f51e9fd
=======
const getOrderById = async (req, res) => {
  const { id } = req.params;
  const { status, json } = await getOrder(id);
>>>>>>> main-group-1-feat-checkout-details-components-front
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
