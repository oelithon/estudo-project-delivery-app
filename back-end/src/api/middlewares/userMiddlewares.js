const Joi = require('joi');
const statusCode = require('../helpers/statusCode');

const {
  BAD_REQUEST,
} = statusCode;

const schemalogin = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
});

const schema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  name: Joi.string().min(12).required(),
});

const loginValidation = (req, res, next) => {
  const body = schemalogin.validate(req.body);
  if ('error' in body) return res.status(BAD_REQUEST).json({ error: body.error.message });

  next();
};

const createUserValidation = (req, res, next) => {
  const body = schema.validate(req.body);
  if ('error' in body) return res.status(BAD_REQUEST).json({ error: body.error.message });

  next();
};

module.exports = { createUserValidation, loginValidation };
