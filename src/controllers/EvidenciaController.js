const httpStatus = require('http-status-codes');
const Evidencia = require('../models/Evidencias');

module.exports = {
    async ObtenerEvidencia(request, response){
        const {idEvidencia} = request.params;
        const data = await Evidencia.ObtenerEvidencia(idEvidencia);

        return response.status(httpStatus.OK).json({
            message: 'OK',
            payload: data,
        });
    }
}