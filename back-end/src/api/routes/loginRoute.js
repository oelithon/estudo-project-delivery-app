const express = require('express');

const loginController = require('../controllers/loginController');

const router = express.Router();

router
  .route('/login')
  .post(loginController.loginUser);

module.exports = router;
