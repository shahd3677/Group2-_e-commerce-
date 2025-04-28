const joi = require("joi");

const new_staff_validation = joi.object({
  name: joi.string().trim().required(),
  password: joi.string().trim().required().min(6),
  email: joi.string().required().trim().email(),
  role: joi.string().trim(),
});
const login_staff_validation = joi.object({
  password: joi.string().trim().required(),
  email: joi.string().required().trim().email(),
});
const reset_Password_validation = joi.object({
  password: joi.string().trim().required(),
});
module.exports = {
  new_staff_validation,
  login_staff_validation,
  reset_Password_validation,
};
