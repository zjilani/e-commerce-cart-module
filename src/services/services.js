const Cart = require("../models/Cart")

const createCart = async (fastify,createCartRequest) =>{
    const cart = new Cart({...createCartRequest})
    return cart.save()
}

const deleteCartProduct = async (fastify,deleteCartProduct) =>{
    const cart = await Cart.findOneAndDelete({customerId:deleteCartProduct.customerId , variantId:deleteCartProduct.variantId})
    return cart
}
const getCartInfo = async (fastify,getCartInfoRequest) =>{
    const cart = await Cart.find({customerId:getCartInfoRequest.customerId})
    return cart
}
const updateQuantityToBuy = async (fastify,updateQuantityToBuyRequest) =>{
    const cart = await Cart.findOneAndUpdate({customerId:updateQuantityToBuyRequest.customerId , variantId: updateQuantityToBuyRequest.variantId},
                                            {$set: { quantityToBuy: updateQuantityToBuyRequest.quantityToBuy }})
    return cart
}
const updateQuantity = async (fastify,updateQuantityRequest) =>{
    const inventories = await fastify.axios.post('http://localhost:3001/getInventoryInfo',{variantId:updateQuantityRequest.variantId})

    inventories.data.data.forEach(async (variant)=>{
        await Cart.updateMany({variantId: variant.variantId},{quantity:variant.inventory})
        
    })


    return {response: "Done"}
}

module.exports ={
    createCart,
    deleteCartProduct,
    getCartInfo,
    updateQuantityToBuy,
    updateQuantity
}