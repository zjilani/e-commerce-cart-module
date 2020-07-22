const service = require('../services/services')
const HttpError = require('../models/errors/httpError')

// Create a new folder in Documer Service
exports.createCart= async (req, res) => {
    try {
        let response = await service.createCart(req.fastify, req.body)

        return res.status(201).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2001, "Create Cart Failed", e.message)
    }
}
exports.deleteCartProduct= async (req, res) => {
    try {
        let response = await service.deleteCartProduct(req.fastify, req.body)

        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2001, "Delete Cart Failed", e.message)
    }
}
exports.getCartInfo= async (req, res) => {
    try {
        let response = await service.getCartInfo(req.fastify, req.query)

        return res.status(200).send({
            status: 'success',
            data: response,
            message: 'Cart Info..'
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2001, "Get Cart Info Failed", e.message)
    }
}
exports.updateQuantityToBuy= async (req, res) => {
    try {
        let response = await service.updateQuantityToBuy(req.fastify, req.body)

        return res.status(200).send({
            status: 'success',
            data: response,
            message: 'Quantity To Buy  Updated...'
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2001, "Quantity To Buy  Updated Failed", e.message)
    }
}
exports.updateQuantity= async (req, res) => {
    try {
        let response = await service.updateQuantity(req.fastify, req.body)

        return res.status(200).send({
            status: 'success',
            data: response,
            message: 'Quantity Updated...'
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2001, "Quantity Updation Failed", e.message)
    }
}
