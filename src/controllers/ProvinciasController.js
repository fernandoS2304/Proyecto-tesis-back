const httpStatus = require('http-status-codes');
const Provincias = require('../models/Provincias');

module.exports = {
    async listarProvincias(request, response){
        const {idDepartamentos} = request.params
        const data = await Provincias.GetProvinciasById(idDepartamentos);
        return response.status(httpStatus.OK).json({
            message: 'OK',
            payload: data === null ? [] : data,
        });
    },
}