const { required } = require('joi')
const { trim } = require('lodash')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productSchema = new Schema({
    title :{
        type : String,
        trim : true,
        required : true
    },
    description :{
        type : String,
        trim : true,
        required : true
    },
    category : {
        type : String,
        trim : true,
        required : true
    },
    image : {
        type : String,
        trim : true,
        required : true
    },
    categoryImage : {
        type : String,
        trim : true,
        required : true
    },
    price : { 
        type : Number,
        required : true
    },
    discountPercentage :{
        type : Number
    },
    stock : {
        type : Number,
        required : true
    }
} , {timestamps : true}
)

const product = mongoose.model("product" , productSchema)
module.exports = {product}