const express = require('express');

const checkoutController = require('../controllers/checkoutController');

const router = express.Router();

router
  .route('/login')
  .get(checkoutController.seller);

module.exports = router;
