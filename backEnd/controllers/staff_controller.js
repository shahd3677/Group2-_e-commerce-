const staffModule = require("../modules/staff_module");
const { new_staff_validation } = require("../validations/staff_validate");
const _ = require("lodash");

const add_staff = async (req, res) => {
  const { error } = new_staff_validation.validate(req.body);
  if (error) return res.json(error.details[0].message);
  else {
    try {
      const body = _.pick(req.body, ["name", "email", "password"]);
      if (!body) return res.json("missing data");
      else {
        const result = await staffModule.addStaff(body);
        return res.status(200).json(result);
      }
    } catch {
      return res.json("something is wrong");
    }
  }
};

module.exports = {
  add_staff,
};
