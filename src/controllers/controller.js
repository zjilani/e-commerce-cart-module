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
        throw new HttpError('failiure', 2001, "Create Product Failed", e.message)
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
        throw new HttpError('failiure', 2001, "Create Product Failed", e.message)
    }
}
