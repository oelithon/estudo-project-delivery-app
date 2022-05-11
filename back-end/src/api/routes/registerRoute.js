const express = require('express');
const { createUser } = require('../controllers/userController');
const { createUserValidation } = require('../middlewares/userMiddlewares');

const router = express.Router();

router
  .route('/register')
  .post(createUserValidation, createUser);

module.exports = router;
