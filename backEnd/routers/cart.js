const express = require("express");
const { getCart, removeToCart, addProductToCart, removeToProductFromCart } = require("../controllers/cart");


const cartRouter = express.Router();
cartRouter.get("/getCart/:_id",getCart)
cartRouter.delete("/deletedAll/:_id",removeToCart)
cartRouter.post("/addproductToCart/:_id",addProductToCart)
cartRouter.delete("/removeproduct/:_id/:itemId",removeToProductFromCart)
module.exports = cartRouter;