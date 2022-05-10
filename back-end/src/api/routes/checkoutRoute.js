const express = require('express');

const checkoutController = require('../controllers/checkoutController');
const { validToken } = require('../middlewares/authMiddlewares');
const { orderValidation } = require('../middlewares/orderMiddlewares');

const router = express.Router();

router
  .route('/checkout')
  .get(checkoutController.seller)
  .post(validToken, orderValidation, checkoutController.create);

module.exports = router;
