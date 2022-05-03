const { getAll } = require('../services/productsService');

const getAllProducts = async (req, res) => {
  const { status, json } = await getAll();
  return res.status(status).json(json);
};

module.exports = {
  getAllProducts,
};
