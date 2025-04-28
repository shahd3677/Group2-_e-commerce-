const express = require("express")
const router = express.Router()
const products = [
    {
      id : 1,
      title: 'red mon',
      author : 'esraa',
      type : 'comedy',
      price : 100
   },
   {
    id : 2,
    title: 'red mon',
    author : 'esraa',
    type : 'comedy',
    price : 100
  },
  {
    id : 3,
    title: 'red mon',
    author : 'esraa',
    type : 'comedy',
    price : 100
  },
  {
    id : 4,
    title: 'red mon',
    author : 'esraa',
    type : 'comedy',
    price : 100
  },
  
  ]
  
  router.get('/all', (req,res)=>{
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
  })
  router.post('/add', (req,res)=>{
    const product = {
      id : products.length+1 ,
      title : req.body.title ,
      author : req.body.author ,
      type : req.body.type ,
      price : req.body.price
  
    }
    products.push(product)
    res.json(products)
  })
router.put('/update/:id' ,(req,res)=>{
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

  module.exports = router