const httpStatus = require('http-status-codes');
const Categoria = require('../models/Categoria');

module.exports = {
    async listarCategoriaPorTipo(request, response){
        const {descripcion} = request.params;
        const data = await Categoria.ListarPorTipo(descripcion);
        return response.status(httpStatus.OK).json({
            message: 'OK',
            payload: data,
        });
    },
}