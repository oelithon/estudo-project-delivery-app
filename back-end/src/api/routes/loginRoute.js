const express = require('express');

const loginController = require('../controllers/loginController');
const { loginValidation } = require('../middlewares/userMiddlewares');

const router = express.Router();

router
  .route('/login')
  .post(loginValidation, loginController.loginUser);

module.exports = router;
