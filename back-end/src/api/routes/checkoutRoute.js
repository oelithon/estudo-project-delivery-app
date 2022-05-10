const express = require('express');

const { getAllSellers } = require('../controllers/userController');
const { createNewSale } = require('../controllers/salesController');
const { validToken } = require('../middlewares/authMiddlewares');
const { orderValidation } = require('../middlewares/orderMiddlewares');

const router = express.Router();

router
  .route('/checkout')
  .get(validToken, getAllSellers)
  .post(validToken, orderValidation, createNewSale);

module.exports = router;
