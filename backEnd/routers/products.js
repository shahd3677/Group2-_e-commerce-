const express = require("express")
const router = express.Router()
const {product} = require('../modules/product')
const Joi = require('joi')
const { join } = require("lodash")

  /* router.get('/all', (req,res)=>{
    res.json(products)
  })
  router.get('/:id' , (req,res)=>{
    const product = products.find(product=>product.id === parseInt(req.params.id))
    if(product){
      res.json(product)
    }
    else {
      res.json({message : "this product not found"})
    }
  }) */
  router.post('/add', async(req,res)=>{
    /// data validation ///////
    const schema = Joi.object({
      title : Joi.string().trim().required(),
      description : Joi.string().trim().required(),
      category : Joi.string().trim().required(),
      image : Joi.string().trim().required(),
      price : Joi.number().required(),
      discountPercentage  : Joi.number().required(),
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
      price : req.body.price,
      discountPercentage : req.body.discountPercentage,
      stock: req.body. stock
  
    })
    const result = await productData.save()
    res.json(result)
  })
/* router.put('/update/:id' ,(req,res)=>{
    const product = products.find(product=>product.id === parseInt(req.params.id))
    if(product){
      product.title = req.body.title
      product.author = req.body.author
      product.type = req.body.type
      product.price = req.body.price
      res.json(product)
    }
    else {
      res.json({message : "this product not found"})
    }
})
router.delete('/delete/:id' ,(req,res)=>{
    const product = products.find(product=>product.id === parseInt(req.params.id))
    if(product){
        const newproducts  = products.filter(product=>product.id != parseInt(req.params.id))
      res.json(newproducts)
    }
    else {
      res.json({message : "this product not found"})
    }
})
 */
  module.exports = router