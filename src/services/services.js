const Cart = require("../models/Cart")

const createCart = async (fastify,createCartRequest) =>{
    const cart = new Cart({...createCartRequest})
    return cart.save()
}

const deleteCartProduct = async (fastify,deleteCartProduct) =>{
    const cart = await Cart.findOneAndDelete({customerId:deleteCartProduct.customerId , variantId:deleteCartProduct.variantId})
    return cart
}

module.exports ={
    createCart,
    deleteCartProduct
}