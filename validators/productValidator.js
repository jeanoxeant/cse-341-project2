const Joi = require('joi');

exports.productSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  price: Joi.number().min(0).required(),
  price: Joi.number().min(0).required(),
  brand: Joi.string().allow('').optional()
});
