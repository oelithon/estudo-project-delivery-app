const express = require('express');

<<<<<<< HEAD
const { createUser } = require('../controllers/userController');
=======
const { loginUser } = require('../controllers/loginController');
>>>>>>> 5ebf200386d65bc32401449f204190c6899ab673
const { loginValidation } = require('../middlewares/userMiddlewares');

const router = express.Router();

router
  .route('/login')
<<<<<<< HEAD
  .post(loginValidation, createUser);
=======
  .post(loginValidation, loginUser);
>>>>>>> 5ebf200386d65bc32401449f204190c6899ab673

module.exports = router;
