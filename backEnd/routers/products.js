const express = require("express")
const router = express.Router()
const {product} = require('../modules/product')
const Joi = require('joi')

  //// get all products  ///////
router.get('/all', async(req,res)=>{
    const allProducts = await product.find()
    res.json(allProducts)
  })

   //// get all limited products  ///////
router.get('/home', async(req,res)=>{
    const limitedProducts = await product.find().limit(6)
    res.json(limitedProducts)
  })

  //// get categories title only ////
  /* router.get('/categories', async (req, res) => {
    try {
      const categories = await product.distinct("category");
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }); */

 /////// get categories title and categoryImage  /////
  router.get('/categories', async (req, res) => {
    try {
      const categories = await product.aggregate([
        {
          $group: {
            _id: "$category",
            image: { $first: "$categoryImage" }  // أو ممكن تستخدم $max أو $min لو في تفاوت
          }
        },
        {
          $project: {
            _id: 0,
            title: "$_id",
            image: 1
          }
        }
      ]);
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
   //// get categoryProducts using category title  ///////
  router.get('/category/:category', async(req,res)=>{
    const categoryProducts = await product.find({category:req.params.category})
    if(categoryProducts){
      res.json(categoryProducts )
    }
    else {
      res.json({message : "No products found for this category"})
    }

  })

   ////// get only product using id //////////
  router.get('/:id' , async(req,res)=>{
    const onlyProduct = await product.findById(req.params.id)
    const relatedProducts = await product.find({
      category: onlyProduct.category,
      _id: { $ne: onlyProduct._id }
    })
    if(!onlyProduct){
     return res.json({message : "product not found"})
    }
       res.json({
        onlyProduct,
        relatedProducts
      })
   
  }) 

   /////// add products /////////////
  router.post('/add', async(req,res)=>{
    /// data validation ///////
    const schema = Joi.object({
      title : Joi.string().trim().required(),
      description : Joi.string().trim().required(),
      category : Joi.string().trim().required(),
      image : Joi.string().trim().required(),
      categoryImage : Joi.string().trim().required(),
      price : Joi.number().required(),
      discountPercentage  : Joi.number(),
      stock : Joi.number().required(),
    })

    const {error} = schema.validate(req.body)
    if(error){
      return res.json({message : error.details[0].message})
    }
     //////// stor product  /////////
    const productData = new product({
      title : req.body.title ,
      description : req.body.description ,
      category : req.body.category,
      image : req.body.image,
      categoryImage : req.body.categoryImage,
      price : req.body.price,
      discountPercentage : req.body.discountPercentage,
      stock: req.body. stock
  
    })
    const result = await productData.save()
    res.json(result)
  })

     ////// update product using id //////////
router.put('/update/:id' , async(req,res)=>{
   /// data validation ///////
   const schema = Joi.object({
    title : Joi.string().trim(),
    description : Joi.string().trim(),
    category : Joi.string().trim(),
    image : Joi.string().trim(),
    categoryImage : Joi.string().trim(),
    price : Joi.number(),
    discountPercentage  : Joi.number(),
    stock : Joi.number(),
  })

  const {error} = schema.validate(req.body)
  if(error){
    return res.json({message : error.details[0].message})
  }
      //////// update product  /////////
    const updateProduct = await product.findByIdAndUpdate(req.params.id ,{
      $set :{
        title : req.body.title ,
        description : req.body.description ,
        category : req.body.category,
        image : req.body.image,
        categoryImage : req.body.categoryImage,
        price : req.body.price,
        discountPercentage : req.body.discountPercentage,
        stock: req.body. stock
      }
    } , {new : true})
    
      res.json(updateProduct)
})

   ////// delete product using id //////////
router.delete('/delete/:id', async(req,res)=>{
  const deleteProduct = await product.findById(req.params.id)
  if(deleteProduct){
    await product.findByIdAndDelete(req.params.id)
    res.json({message : "product is deleted"})
  }
  else {
    res.json({message : "product not found"})
  }
})
 

  module.exports = router