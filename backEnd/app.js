const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const staff_routes = require("./routers/staff_route");
const productpath = require('./routers/products');
const userRouter = require("./routers/user_route");
const authRouter = require("./routers/auth_route");
const cartRouter = require("./routers/cart");
//const categorypath = require('./routers/categories')


dotenv.config({ path: "./Config.env" });

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors("http://localhost:4200"));

app.use("/staff", staff_routes);
app.use("/products", productpath)
app.use("/auth",authRouter)
app.use("/user",userRouter)
app.use("/cart",cartRouter)
//app.use("/categories", categorypath)
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connection is ok"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running ${port}`);
});

