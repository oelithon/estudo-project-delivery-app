const express = require('express');

// const loginController = require('../controllers/loginController');

const loginRoute = express.Router();

loginRoute
  .route('/login')
  .get((_req, res) => res.status(200).json('deu bom'));

module.exports = {
  loginRoute,
};
