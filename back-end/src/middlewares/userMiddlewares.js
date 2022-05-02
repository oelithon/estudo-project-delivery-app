import joi from ('joi')
import statusCode from "../helpers/statusCode";

const {   
  OK,
  CREATED,
  NO_CONTENT,
  BAD_REQUEST,
  UNAUTHORIZED,
  NOT_FOUND,
  CONFLICT,
  INTERNAL_SERVER_ERROR,} = statusCode;

const schemalogin = joi.object({
  password: joi.string.min(6).required(),
  email: joi.string().email().required(),
})

const schemaCreateUser = joi.object({
  password: joi.string.min(6).required(),
  email: joi.string().email().required(),
  name: joi.string().min(12)
})

export const loginValidation = (req, res, next) => {
const body = schemalogin.validate(req.body)
if ('error' in body) return res.status(BAD_REQUEST).json(body.error)

next();
};

export const createUserValidation = (req, res, next) => {
  const body = schemaCreateUser.validate(req.body)
  if ('error' in body) return res.status(BAD_REQUEST).json(body.error)
  
  next();
}