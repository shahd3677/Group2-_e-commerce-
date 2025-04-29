const express = require("express");
const { forgetPassword, login, resetPassword, sendEmail, signUP } = require("../controllers/auth_controller");


const authRouter = express.Router();

authRouter.post("/signUP", signUP);
authRouter.post("/login", login);
authRouter.post("/sendEmail", sendEmail);
authRouter.post("/forgetPassword", forgetPassword);
authRouter.post("/reset", resetPassword);

module.exports = authRouter;