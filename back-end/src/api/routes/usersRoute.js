const express = require('express');
const { getAllUsers } = require('../controllers/userController');
const { validToken } = require('../middlewares/authMiddlewares');

const router = express.Router();

router
.get('/users', validToken, getAllUsers);

module.exports = router;