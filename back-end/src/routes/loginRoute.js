const express = require('express');

const loginController = require('../controllers/loginController');

const loginRoute = express.Router();

loginRoute
  .route('/login')
  .get(loginController.loginUser);

module.exports = loginRoute;
