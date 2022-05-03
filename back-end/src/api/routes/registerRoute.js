const express = require('express');
const { createUserValidation } = require('../middlewares/userMiddlewares');

const router = express.Router();

router
  .route('/register')
  .post(createUserValidation);

module.exports = router;