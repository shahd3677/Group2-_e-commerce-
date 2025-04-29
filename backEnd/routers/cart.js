const express = require("express");
const { getCart, removeToCart, removeToProductFromCart ,addProductsToCart} = require("../controllers/cart");


const cartRouter = express.Router();
cartRouter.get("/getCart/:_id",getCart)
cartRouter.delete("/deletedAll/:_id",removeToCart)
cartRouter.post("/addproductToCart/:_id",addProductsToCart)
cartRouter.delete("/removeproduct/:_id/:itemId",removeToProductFromCart)
module.exports = cartRouter;