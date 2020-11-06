const httpStatus = require('http-status-codes');
const Roles = require('../models/Roles');

module.exports = {
    async listarRoles(request, response) {
        const data = await Roles.Listar();
        return response.status(httpStatus.OK).json({
            message: 'OK',
            payload: data,
        });
    },
}