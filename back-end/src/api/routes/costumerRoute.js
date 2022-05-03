const express = require('express');
const { getAllProducts } = require('../controllers/productsController');
const { getItem, getOrders } = require('../controllers/salesController');
const { validToken } = require('../middlewares/authMiddlewares');

const router = express.Router();

router.get('/customer/products',  getAllProducts);

router.get('/customer/orders',  getOrders);

router.get('/customer/orders/:id',  getItem);

module.exports = router;