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
    }
    
]


module.exports = routes