const HttpError = require('../models/errors/httpError')

exports.validateCreateCartRequest = function (req, res, done) {
    if (!req.body.productName) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'productName is missing'))
    }else if (!req.body.customerId) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'customerId is missing'))
    }else if (!req.body.productId) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'productId is missing'))
    }else if (!req.body.variantId) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'variantId is missing'))
    }
    else if (!req.body.mainCategory) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'mainCategory is missing'))
    } else if (!req.body.subCategory) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'subCategory is missing'))
    }  
    else if (!req.body.price) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'price is missing'))
    }
    else if (!req.body.quantity) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'quantity is missing'))
    }    
    else {
        done()
    }
}

exports.validateDeleteCartProductRequest = function (req, res, done) {
    if (!req.body.customerId) {
        res.code(400)
        done(new HttpError('faliure', 20002, 'customerId is missing'))
    }else if (!req.body.variantId) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'variantId is missing'))
    }
    else {
        done()
    }
}