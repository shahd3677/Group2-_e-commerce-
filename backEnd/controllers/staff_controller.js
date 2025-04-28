const staffModule = require("../modules/staff_module");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "../Config.env" });
const {
  new_staff_validation,
  login_staff_validation,
  reset_Password_validation,
} = require("../validations/staff_validate");
const _ = require("lodash");

const add_staff = async (req, res) => {
  const { error } = new_staff_validation.validate(req.body);
  if (error) return res.json({ message: error.details[0].message });
  else {
    try {
      const body = _.pick(req.body, ["name", "email", "password", "role"]);
      if (!body) return res.json({ message: "missing data" });
      else {
        const result = await staffModule.addStaff(body);
        return res.status(200).json({ message: result });
      }
    } catch (error) {
      return res.json({ message: error.message });
    }
  }
};

const login_staff = async (req, res) => {
  try {
    const { error } = login_staff_validation.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });
    else {
      const body = _.pick(req.body, ["email", "password"]);
      if (!body) return res.status(400).json({ message: "missing data" });
      else {
        const staff = await staffModule.by_email(body.email);
        if (!staff)
          return res.status(400).json({
            message: "Invalid Login. Check your E-mail or password",
          });
        else {
          const isPasswordValid = await staffModule.comparePassword(
            body.password,
            staff.password
          );
          if (!isPasswordValid)
            return res.status(400).json({
              message: "Invalid Login. Check your E-mail or password",
            });
          else {
            const token = jwt.sign(
              { id: staff._id, role: staff.role },
              process.env.SECRETKEY,
              { expiresIn: process.env.JWT_EXPIRES_IN }
            );
            return res.json({
              message: "logIn successful",
              token: token,
              role: staff.role,
            });
          }
        }
      }
    }
  } catch (error) {
    return res.json({ message: error.message });
  }
};
const allStaff = async (req, res) => {
  try {
    const staff = await staffModule.allStaff();
    return res.json({ message: staff });
  } catch (error) {
    return res.json({ message: error.message });
  }
};
const deleteStaff = async (req, res) => {
  try {
    const id = req.params.id;
    if (id) {
      const result = await staffModule.deleteStaff(id);
      return res.json({ message: result });
    } else return res.json({ message: "there is no id" });
  } catch (error) {
    return res.json({ message: error.message });
  }
};
const resetPassword = async (req, res) => {
  try {
    const { error } = reset_Password_validation.validate(req.body);
    if (error) return res.json({ message: error.details[0].message });
    else {
      const id = req.params.id;
      const password = req.body.password;
      if (id) {
        const result = await staffModule.resetPassword(id, password);
        return res.json({ message: result });
      } else return res.json({ message: "there is no id" });
    }
  } catch (error) {
    return res.json({ message: error.message });
  }
};
module.exports = {
  add_staff,
  login_staff,
  allStaff,
  deleteStaff,
  resetPassword,
};
