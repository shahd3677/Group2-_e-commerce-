const express = require("express");
const {
  createUser,
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} = require("../controllers/user_controller");

const userRouter = express.Router();

userRouter.post("/add", createUser);
userRouter.get("/getAll", getAllUser);
userRouter.get("/getuser/:id", getUser);
userRouter.put("/update/:id", updateUser);
userRouter.delete("/delete/:id", deleteUser);

module.exports = userRouter;
