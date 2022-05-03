const express = require('express');
const { getAllProducts } = require('../controllers/productsController');
const { validToken } = require('../middlewares/authMiddlewares');

const router = express.Router();

router
  .route('/customer/products')
  .get(validToken, getAllProducts);

module.exports = router;