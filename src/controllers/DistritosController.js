const httpStatus = require('http-status-codes');
const Distritos = require('../models/Distritos');

module.exports = {
    async listarDistritos(request, response){
        const {idProvincias} = request.params
        const data = await Distritos.GetDistritosById(idProvincias);
        return response.status(httpStatus.OK).json({
            message: 'OK',
            payload: data === null ? [] : data,
        });
    },
}