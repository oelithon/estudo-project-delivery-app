const express = require('express');

const { createUser } = require('../controllers/userController');
const { loginValidation } = require('../middlewares/userMiddlewares');

const router = express.Router();

router
  .route('/login')
  .post(loginValidation, createUser);

module.exports = router;
