const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");

dotenv.config({ path: "../Config.env" });

const Schema = mongoose.Schema;

const staffSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      default: "admin",
    },
  },
  { timestamps: true }
);

const staffModel = mongoose.model("Staff", staffSchema);

async function hashPassword(plaintext) {
  const saltRounds = await bcrypt.genSalt(+process.env.SALT);
  const hash = await bcrypt.hash(plaintext, saltRounds);
  return hash;
}
async function comparePassword(plaintTextPassword, hash) {
  const result = await bcrypt.compare(plaintTextPassword, hash);
  return result;
}

async function addStaff(newStaff) {
  const staff = await staffModel.find({ email: newStaff.email });
  if (staff.length) return "this email already exists";
  else {
    newStaff.password = await hashPassword(newStaff.password);
    await staffModel.create(newStaff);
    return "the user has been added successfully";
  }
}

async function by_email(email) {
  const result = await userModel.findOne({ email: email });
  return result;
}
async function changeRole(data) {
  const user = await userModel.findOne({ email: data.email });
  if (user) {
    await userModel.findByIdAndUpdate(user._id, { role: data.value });
    return "the user has been updated successfully";
  } else return "this user not found";
}

module.exports = {
  addStaff,
  by_email,
  comparePassword,
  changeRole,
};
