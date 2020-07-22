const controllers = require('../controllers/controller')
const validators = require('../validators/validators')

// Import Swagger documentation
const documentation = require('./documentation/documentServicesApis')

const routes = [
    {
        method: "POST",
        url: "/createCart",
        handler: controllers.createCart,
        schema: documentation.createCart,
        preValidation: validators.validateCreateCartRequest
    },
    {
        method: "DELETE",
        url: "/deleteCartProduct",
        handler: controllers.deleteCartProduct,
        schema: documentation.deleteCartProduct,
        preValidation: validators.validateDeleteCartProductRequest
    },
    {
        method: "GET",
        url: "/getCartInfo",
        handler: controllers.getCartInfo,
        schema: documentation.getCartInfo,
        preValidation: validators.validateGetCartInfoRequest
    },
    {
        method: "POST",
        url: "/updateQuantityToBuy",
        handler: controllers.updateQuantityToBuy,
        schema: documentation.updateQuantityToBuy,
        preValidation: validators.validateUpdateQuantityToBuyRequest
    },
    {
        method: "POST",
        url: "/updateQuantity",
        handler: controllers.updateQuantity,
        schema: documentation.updateQuantity,
        preValidation: validators.validateUpdateQuantityRequest
    }
    
]


module.exports = routes