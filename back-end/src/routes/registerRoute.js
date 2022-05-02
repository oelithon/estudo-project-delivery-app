const express = require('express');
const { createUserValidation } = require('../middlewares/userMiddlewares');

const router = express.Router();

router
  .route('/register')
  .get((req, res) => res.status(200).json('deubom'))
  .post(createUserValidation);

module.exports = router;