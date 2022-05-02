import express from 'express';
const router = express.Router();
import { createUserValidation } from '../middlewares/userMiddlewares'

router
.route('/register')
.post(createUserValidation)