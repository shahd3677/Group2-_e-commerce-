
const mongoose = require('mongoose');


const cartSchema=new mongoose.Schema({
    items:[{
        product:{type:mongoose.Schema.Types.ObjectId,ref:"product"},
        quantity: { type: Number, default: 1 },
        price: Number
    }],
    totalPrice: Number,
    totalPriceAfterDiscount: Number,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
},{
    timestamps: true
})

const cartModel = mongoose.model("Cart", cartSchema);
module.exports = cartModel;