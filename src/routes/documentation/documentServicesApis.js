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
