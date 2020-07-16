const mongoose = require('mongoose');

require('../app');

const cartSchema = new mongoose.Schema({
    customerId:{
        type:String,
        required:true
    },
    mainCategory:{
        type:String,
        enum:["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
        required:true
    },
    subCategory:{
        type:String,
        required:true
    },
    variantId:{
        type: String,
        required: true
    },
    productId:{
        type: String,
        required: true,
    },
    productName:{
        type: String,
        required: true
    },
    color: {
        type:String,
    },
    price: {
        type:Number,
        required: true
    },
    size: {
        type:String
    },
    quantity:{
        type:Number,
        required:true
    }

});
const Cart= mongoose.model('Cart', cartSchema);

module.exports = Cart;