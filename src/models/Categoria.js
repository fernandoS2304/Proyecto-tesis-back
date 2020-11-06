const Database = require('../models');

const {Categoria} = Database;

Categoria.ListarPorTipo = async function (descripcion){
    return Categoria.findAll({
        where: {
            descripcion,
        },
    });
};

module.exports = Categoria;