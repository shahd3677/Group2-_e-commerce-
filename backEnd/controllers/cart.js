
const cartModel = require("../modules/cart");
const  product  = require("../modules/product");
const userModel=require("../modules/user_module")
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
   const addProductsToCart = async (req, res) => {
    const { selectedProductIds } = req.body;  // تأكد من أنك تستقبل المصفوفة
  
    if (!selectedProductIds || selectedProductIds.length === 0) {
      return res.status(400).json({ message: 'No products provided' });
    }
  
    try {
      // تنفيذ منطق إضافة المنتجات إلى السلة
      const {userId} = req.params._id;
      const user = await userModel.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // منطق إضافة المنتجات إلى السلة
      // يمكن إضافة كل منتج أو التحقق إذا كان موجودًا مسبقًا في السلة
      const cart = await cartModel.findOne({ user: user._id });
  
      selectedProductIds.forEach(async (productId) => {
        const isProduct = await product.findById(productId);
        if (isProduct) {
          cart.items.push({ product: isProduct._id, price: isProduct.price });
        }
      });
  
      await cart.save();
      res.status(200).json({ message: 'Products added to cart successfully', cart });
  
    } catch (error) {
      console.error('Error adding products to cart:', error);
      res.status(500).json({ message: 'Internal Server Error' });
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
    addProductsToCart,
    removeToProductFromCart
}