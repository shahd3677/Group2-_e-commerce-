
const cartModel = require("../modules/cart");
const { product } = require("../modules/product");

// getUsertoCart

const getCart=async(req,res,next)=>{
   

 try {
    const userId = req.params._id;
    const cart = await cartModel.findOne({ user: userId });
    if(!cart){
        return res.status(400).json({message:"you don't have cart yet"})
    }
    res.status(200).json({message:"you have cart",cart})
 } catch (error) {
    res.status(500).json({ error: error.message });
 }
}

// removeUserToCart
const removeToCart=async(req,res,next)=>{
   
 
    try {
        const userId = req.params._id;

    const cart = await cartModel.findOneAndDelete({ user: userId });
       if(!cart){
           return res.status(400).json({message:"you don't have cart yet"})
       }
       res.status(200).json({message:"deleted Successfully"})
    } catch (error) {
       res.status(500).json({ error: error.message });
    }
   }
   //addProductToCart
   const addProductToCart=async(req,res,next)=>{
    try {
        const productId = req.body.productId; 
        const userId = req.params._id;       
    
        const isExistProduct = await product.findById(productId);
        if (!isExistProduct) {
          return res.status(400).json({ message: "Product doesn't exist" });
        }
    
        let cart = await cartModel.findOne({ user: userId });
    
        // لو مفيش كارت، نعمل واحد جديد
        if (!cart) {
          cart = new cartModel({
            user: userId,
            items: [{ product: isExistProduct._id, price: isExistProduct.price }]
          });
        } else {
          // لو فيه كارت، نضيف المنتج الجديد
          cart.items.push({ product: isExistProduct._id, price: isExistProduct.price });
        }
        cart.totalPrice = cart.items.reduce((acc, item) => acc + item.price, 0);
        await cart.save();
        res.status(200).json({ message: "Product added to cart successfully", cart });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
   }
   const removeToProductFromCart=async(req,res,next)=>{
      try {
        const userId = req.params._id;    
        const cart = await cartModel.findOneAndUpdate(
            { user: userId}, 
            { $pull: { items: { _id: req.params.itemId } } },
            { new: true }
          );

    if (!cart) {
        return res.status(400).json({ message: "Cart not found for this user" });
      }
  
  
      cart.totalPrice = cart.items.reduce((acc, item) => acc + item.price, 0);
          await cart.save()
          res.status(200).json({ length: cart.items.length, cart });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
   }
module.exports={
    getCart,
    removeToCart,
    addProductToCart,
    removeToProductFromCart
}