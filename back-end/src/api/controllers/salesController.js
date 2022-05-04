const { getItemById, getAllByUserId } = require('../services/salesService');

const getItem = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { status, json } = await getItemById(id);
  return res.status(status).json(json);
};

const getOrders = async (req, res) => {
  const token = req.headers.authorization;
  const { status, json } = await getAllByUserId(token);
  return res.status(status).json(json);
};

module.exports = {
  getItem, 
  getOrders,
};
