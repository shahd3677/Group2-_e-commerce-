const userModel = require("../modules/user_module");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// addUser
const createUser = async (req, res, next) => {
  const { name, email, password, phone, _id } = req.body;
  let user = await userModel.findOne({ email });
  if (user) return res.status(404).json({ message: "Email already exists" });
  try {
    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.saltRounds));
    const token = jwt.sign({ id: _id }, process.env.SecretTOKEN, { expiresIn: "7h" });

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
    });
    const users = await newUser.save();

    res.status(201).json({ message: "User created successfully", user: users, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// getAllUser
const getAllUser = async (req, res, next) => {
  const users = await userModel.find({});
  try {
    if (users) {
      res.status(200).json({ message: "Successfully", users });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// getUserById
const getUser = async (req, res, next) => {
  const { id } = req.params;
  const user = await userModel.findById(id);
  try {
    if (user) {
      res.status(200).json({ message: "User found", user });
    } else {
      res.status(404).json({ message: "User does not exist" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// updateUser
const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { name, email, password, phone } = req.body;

  try {
    let user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }

    if (name) user.name = name;
    if (email) user.email = email;
    if (phone) user.phone = phone;

    if (password) {
      const hashedPassword = await bcrypt.hash(password, parseInt(process.env.saltRounds));
      user.password = hashedPassword;
    }

    const newUser = await user.save();
    res.status(200).json({ message: "Updated successfully", newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// deleteUser
const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    let user = await userModel.findByIdAndDelete(id);
    if (user) {
      return res.status(200).json({
        message: "Deleted successfully, please clear token",
        clearToken: true,
      });
    }
    res.status(404).json({ message: "User does not exist" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// تصدير كل الوظائف
module.exports = {
  createUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser
};
