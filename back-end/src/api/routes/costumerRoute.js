const express = require('express');
const { getAllProducts } = require('../controllers/productsController');
const { getOrderById, getOrders, editOrderById } = require('../controllers/salesController');
const { validToken } = require('../middlewares/authMiddlewares');

const router = express.Router();

router.get('/customer/products', validToken, getAllProducts);

router.get('/customer/orders', validToken, getOrders);

router
.get('/customer/orders/:id', validToken, getOrderById)
.put('/customer/orders/:id', validToken, editOrderById);

module.exports = router;