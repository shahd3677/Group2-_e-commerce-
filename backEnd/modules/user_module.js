const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: false, trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, enum: ["manager", "admin", "user"], default: "user" },
  resetCode: { type: String },
  resetCodeExpire: { type: Date },
}, {
  timestamps: true
});


const userModel = mongoose.model("User", userSchema);
module.exports = userModel;