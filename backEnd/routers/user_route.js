const express = require("express");
<<<<<<< HEAD
const {
  createUser,
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} = require("../controllers/user_controller");
=======
const { createUser, deleteUser, getAllUser, getUser, updateUser } = require("../controllers/user_controller");
>>>>>>> 8c3a3ed439458787c8ec2c701154f2947edbac50

const userRouter = express.Router();

userRouter.post("/add", createUser);
userRouter.get("/getAll", getAllUser);
userRouter.get("/getuser/:id", getUser);
userRouter.put("/update/:id", updateUser);
userRouter.delete("/delete/:id", deleteUser);

module.exports = userRouter;
