const httpStatus = require('http-status-codes');
const Estado = require('../models/Estado');

module.exports = {
    async listarEstado(request, response) {
        const data = await Estado.Listar();
        return response.status(httpStatus.OK).json({
            message: 'OK',
            payload: data,
        });
    },
}