const express = require('express');

const loginRoute = express.Router();

loginRoute
  .route('/login');
  
module.exports = loginRoute;
