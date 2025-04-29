const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const staff_routes = require("./routers/staff_route");
<<<<<<< HEAD
const user_routes = require("./routers/user_route");
const productpath = require("./routers/products");
const categorypath = require("./routers/categories");
=======
const productpath = require('./routers/products');
const userRouter = require("./routers/user_route");
const authRouter = require("./routers/auth_route");
const cartRouter = require("./routers/cart");
//const categorypath = require('./routers/categories')

>>>>>>> 8c3a3ed439458787c8ec2c701154f2947edbac50

dotenv.config({ path: "./Config.env" });

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors("http://localhost:4200"));

app.use("/staff", staff_routes);
<<<<<<< HEAD
app.use("/products", productpath);
app.use("/user", user_routes);
=======
app.use("/products", productpath)
app.use("/auth",authRouter)
app.use("/user",userRouter)
app.use("/cart",cartRouter)
>>>>>>> 8c3a3ed439458787c8ec2c701154f2947edbac50
//app.use("/categories", categorypath)

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connection is ok"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
