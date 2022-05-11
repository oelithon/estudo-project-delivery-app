const express = require('express');

const { loginUser } = require('../controllers/loginController');
const { loginValidation } = require('../middlewares/userMiddlewares');

const router = express.Router();

router
  .route('/login')
  .post(loginValidation, loginUser);

module.exports = router;
