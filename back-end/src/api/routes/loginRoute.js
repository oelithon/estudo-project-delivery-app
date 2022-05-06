const express = require('express');

const loginController = require('../controllers/loginController');

const router = express.Router();

router
  .route('/login')
  .get((_req, res) => res.status(200).json({ message: 'tudo ok!' }))
  .post(loginController.loginUser);

module.exports = router;
