const Joi = require('joi');
const statusCode = require('../helpers/statusCode');

const {
  BAD_REQUEST,
} = statusCode;

const schemaOrder = Joi.object({
  sellerId: Joi.number().required(),
  totalPrice: Joi.number().required(),
  deliveryAddress: Joi.string().required(),
  deliveryNumber: Joi.string().required(),
  products: Joi.array().items(
    Joi.object().keys({
      productId: Joi.number().required(),
      quantity: Joi.number().required(),
    }),
    ),
});

const orderValidation = (req, res, next) => {
  const body = schemaOrder.validate(req.body);
  if ('error' in body) return res.status(BAD_REQUEST).json({ error: body.error.message });

  next();
};

module.exports = {
  orderValidation,
};