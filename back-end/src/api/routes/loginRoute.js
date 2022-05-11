const express = require('express');

const { createNewSale } = require('../controllers/userController');
const { loginValidation } = require('../middlewares/userMiddlewares');

const router = express.Router();

router
  .route('/login')
  .post(loginValidation, createNewSale);

module.exports = router;
