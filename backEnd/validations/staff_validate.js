const joi = require("joi");

const new_staff_validation = joi.object({
  name: joi.string().trim().required(),
  password: joi.string().trim().required().min(6),
  email: joi
    .string()
    .required()
    .trim()
    .pattern(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/),
});

module.exports = {
  new_staff_validation,
};
