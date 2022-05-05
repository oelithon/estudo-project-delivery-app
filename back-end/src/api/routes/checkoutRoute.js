const express = require('express');

const checkoutController = require('../controllers/checkoutController');

const router = express.Router();

router
  .route('/checkout')
  .get(checkoutController.seller)
  .post(checkoutController.create);

module.exports = router;
