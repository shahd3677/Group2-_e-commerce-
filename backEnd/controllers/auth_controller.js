const userModel = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendEmailFunction } = require("../utilits/sendEmail.js");

// signUP
const signUP = async (req, res, next) => {
  try {
    const { name, email, password, phone } = req.body;
    let user = await userModel.findOne({ email });
    if (user) {
      return res.status(404).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.saltRounds));

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
    });
    const users = await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// login
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user._id }, process.env.SecretTOKEN, { expiresIn: '7h' });

    res.status(200).json({
      message: "Successfully logged in",
      token,
      user
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// login with google
const sendEmail = async (req, res, next) => {
  const { name, email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  let user = await userModel.findOne({ email });
  if (!user) {
    user = await userModel.create({ email, name });
  }

  const token = jwt.sign({ id: user._id }, process.env.SecretTOKEN, { expiresIn: '7h' });
  const urlLogin = `${process.env.PORT}/${token}`;

  try {
    await sendEmailFunction({
      to: user.email,
      subject: "Reset your password",
      text: `Click the link to reset your password: ${urlLogin}`,
    });

    res.status(200).json({ message: "Email sent successfully", user, token });
  } catch (error) {
    next(error);
  }
};

// forgetPassword
const forgetPassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email does not exist" });
    }

    const resetCode = Math.floor(100000 + Math.random() * 900000).toString();
    user.resetCode = resetCode;
    user.resetCodeExpire = Date.now() + 10 * 60 * 1000; // valid for 10 minutes
    await user.save();

    await sendEmailFunction({
      to: user.email,
      subject: "Reset Password Code",
      text: `Your reset password code is ${resetCode}`,
    });
    let resetToken=jwt.sign({ id: user._id }, process.env.SecretTOKEN, { expiresIn: '10m' });
    return res.status(200).json({ message: "Reset code sent to your email", resetToken });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// resetPassword
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userModel } from "../models/userModel.js";

export const resetPassword = async (req, res, next) => {
  const { resetCode, password } = req.body;
  let resetToken = "";

  try {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      resetToken = req.headers.authorization.split(" ")[1];
    } else {
      return res.status(400).json({ message: "You can't do this action" });
    }

    const decoded = jwt.verify(resetToken, process.env.SecretTOKEN);
    const user = await userModel.findOne({ _id: decoded.id }); 

    if (!user) {
      return res.status(400).json({ message: "Verify your reset code first" });
    }

    if (user.resetCode !== resetCode || Date.now() > user.resetCodeExpire) {
      return res.status(400).json({ message: "Invalid or expired reset code" });
    }

    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.saltRounds));
    user.password = hashedPassword;
    user.resetCode = undefined;
    user.resetCodeExpire = undefined;

    await user.save();

    res.status(200).json({ message: "Password reset successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// تصدير كل الوظائف
module.exports = {
  signUP,
  login,
  sendEmail,
  forgetPassword,
  resetPassword
};
