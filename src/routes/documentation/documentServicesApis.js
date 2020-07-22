exports.createCart = {
    description: 'Create a  cart in Shopping Cart',
    tags: ["Carts"],
    summary: 'Create a  cart',
    body: {
        "type": "object",
        "properties": {
            "customerId": {
                "type": "string"
            },
            "productId": {
                "type": "string"
            },
            "variantId":{
                "type":"string",
            },
            "productName":{
                "type":"string"
            },
            "color":{
                "type": "string"
            },
            "size":{
                "type":"string"
            },
            "price":{
                "type":"number"
            },
            "quantity":{
                "type":"number"
                
            },
            "quantityToBuy":{
                "type":"number"
            },
            "mainCategory":{
                "type":"string",
                "enum":["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
            },
            "subCategory":{
                "type":"string",
            }
        },
        "required": [
            "customerId",
            "productId",
            "variantId",
            "productName",
            "price",
            "quantity",
            "quantityToBuy",
            "mainCategory",
            "subCategory"
        ]
    },
    response: {
        201: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['faliure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "customerId": {
                            "type": "string"
                        },
                        "productId": {
                            "type": "string"
                        },
                        "variantId":{
                            "type":"string",
                        },
                        "productName":{
                            "type":"string"
                        },
                        "color":{
                            "type": "string"
                        },
                        "size":{
                            "type":"string"
                        },
                        "price":{
                            "type":"number"
                        },
                        "quantity":{
                            "type":"number"
                            
                        },
                        "quantityToBuy":{
                            "type":"number"
                        },
                        "mainCategory":{
                            "type":"string",
                            "enum":["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
                        },
                        "subCategory":{
                            "type":"string",
                        }
                    },
                    "required": [
                        "customerId",
                        "productId",
                        "variantId",
                        "productName",
                        "price",
                        "quantity",
                        "quantityToBuy",
                        "mainCategory",
                        "subCategory"
                    ]
                },
            },
                    "required": [
                            "status",
                            "data"
                            ]
        }, 400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
    }
    exports.deleteCartProduct = {
        description: 'Delete a product from Shopping Cart',
        tags: ["Carts"],
        summary: 'delete a product',
        body: {
            "type": "object",
            "properties": {
                "customerId": {
                    "type": "string"
                },
                "variantId":{
                    "type":"string",
                }
            },
            "required": [
                "customerId",
                "variantId"
            ]
        },
        response: {
            200: {
                description: 'Successful response',
                "type": "object",
                "properties": {
                    "status": {
                        "type": "string",
                        "enum": ['faliure', 'success'],
                    },
                    "message": {
                        "type": "string"
                    },
                    "data": {
                        "type": "object",
                        "properties": {
                            "customerId": {
                                "type": "string"
                            },
                            "variantId":{
                                "type":"string",
                            }
                        },
                        "required": [
                            "customerId",
                            "variantId"
                        ]
                    },
                },
                        "required": [
                                "status",
                                "data"
                                ]
            }, 400: {
                "description": 'Error response',
                "type": "object",
                "properties": {
                    "status": {
                        "type": "string"
                    },
                    "code": {
                        "type": "integer"
                    },
                    "errorCause": {
                        "type": "string"
                    },
                    "message": {
                        "type": "string"
                    }
                },
                "required": [
                    "status",
                    "message",
                    "code"
                ]
            },
            500: {
                "description": 'Error response',
                "type": "object",
                "properties": {
                    "status": {
                        "type": "string"
                    },
                    "code": {
                        "type": "integer"
                    },
                    "errorCause": {
                        "type": "string"
                    },
                    "message": {
                        "type": "string"
                    }
                },
                "required": [
                    "status",
                    "message",
                    "code",
                    "errorCause"
                ]
            }
        }
        }
        exports.getCartInfo = {
            description: 'Delete a product from Shopping Cart',
            tags: ["Carts"],
            summary: 'delete a product',
            query: {
                "type": "object",
                "properties": {
                    "customerId": {
                        "type": "string"
                    }
                },
                "required": [
                    "customerId",
                   
                ]
            },
            response: {
                200: {
                    description: 'Successful response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string",
                            "enum": ['faliure', 'success'],
                        },
                        "message": {
                            "type": "string"
                        },
                        "data": {
                            "type": "array",
                            "properties": {
                                "customerId": {
                                    "type": "string"
                                },
                                "productId": {
                                    "type": "string"
                                },
                                "variantId":{
                                    "type":"string",
                                },
                                "productName":{
                                    "type":"string"
                                },
                                "color":{
                                    "type": "string"
                                },
                                "size":{
                                    "type":"string"
                                },
                                "price":{
                                    "type":"number"
                                },
                                "quantityToBuy":{
                                    "type":"number"
                                },
                                "quantity":{
                                    "type":"number"
                                    
                                },
                                "mainCategory":{
                                    "type":"string",
                                    "enum":["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
                                },
                                "subCategory":{
                                    "type":"string",
                                }
                            },
                            "required": [
                                "customerId",
                                "productId",
                                "variantId",
                                "productName",
                                "color",
                                "size",
                                "price",
                                "quantityToBuy",
                                "quantity",
                                "mainCategory",
                                "subCategory"
                            ]
                        },
                    },
                            "required": [
                                    "status",
                                    "data"
                                    ]
                }, 400: {
                    "description": 'Error response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string"
                        },
                        "code": {
                            "type": "integer"
                        },
                        "errorCause": {
                            "type": "string"
                        },
                        "message": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "status",
                        "message",
                        "code"
                    ]
                },
                500: {
                    "description": 'Error response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string"
                        },
                        "code": {
                            "type": "integer"
                        },
                        "errorCause": {
                            "type": "string"
                        },
                        "message": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "status",
                        "message",
                        "code",
                        "errorCause"
                    ]
                }
            }
            }
            exports.updateQuantityToBuy = {
                description: 'Updating Quantity to buy from Shopping Cart',
                tags: ["Carts"],
                summary: 'Updating Quantity to buy',
                body: {
                    "type": "object",
                    "properties": {
                        "customerId": {
                            "type": "string"
                        },
                        "variantId":{
                            "type":"string",
                        },
                        "quantityToBuy":{
                            "type":"number"
                        }
                    },
                    "required": [
                        "customerId",
                        "variantId",
                        "quantityToBuy"
                    ]
                },
                response: {
                    200: {
                        description: 'Successful response',
                        "type": "object",
                        "properties": {
                            "status": {
                                "type": "string",
                                "enum": ['faliure', 'success'],
                            },
                            "message": {
                                "type": "string"
                            }
                        },
                                "required": [
                                        "status",
                                        "message"
                                        ]
                    }, 400: {
                        "description": 'Error response',
                        "type": "object",
                        "properties": {
                            "status": {
                                "type": "string"
                            },
                            "code": {
                                "type": "integer"
                            },
                            "errorCause": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "status",
                            "message",
                            "code"
                        ]
                    },
                    500: {
                        "description": 'Error response',
                        "type": "object",
                        "properties": {
                            "status": {
                                "type": "string"
                            },
                            "code": {
                                "type": "integer"
                            },
                            "errorCause": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "status",
                            "message",
                            "code",
                            "errorCause"
                        ]
                    }
                }
                }
                exports.updateQuantity = {
                    description: 'Updating Quantity from Shopping Cart',
                    tags: ["Carts"],
                    summary: 'Updating Quantity',
                    body: {
                        "type": "object",
                        "properties": {
                            "variantId": {
                                "type": "array",
                                "items":{
                                    "type":"string"
                                }
                            }
                        },
                        "required": [
                            "variantId"
                        ]
                    },
                    response: {
                        200: {
                            description: 'Successful response',
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string",
                                    "enum": ['faliure', 'success'],
                                },
                                "message": {
                                    "type": "string"
                                }
                            },
                                    "required": [
                                            "status",
                                            "message"
                                            ]
                        }, 400: {
                            "description": 'Error response',
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string"
                                },
                                "code": {
                                    "type": "integer"
                                },
                                "errorCause": {
                                    "type": "string"
                                },
                                "message": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "status",
                                "message",
                                "code"
                            ]
                        },
                        500: {
                            "description": 'Error response',
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string"
                                },
                                "code": {
                                    "type": "integer"
                                },
                                "errorCause": {
                                    "type": "string"
                                },
                                "message": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "status",
                                "message",
                                "code",
                                "errorCause"
                            ]
                        }
                    }
                    }
