const httpStatus = require('http-status-codes');
const Departamentos = require('../models/Departamentos');

module.exports = {
    async listarDepartamentos(request, response){
        const data = await Departamentos.Listar();
        return response.status(httpStatus.OK).json({
            message: 'OK',
            payload: data,
        });
    },
}