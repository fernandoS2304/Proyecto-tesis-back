const Database = require('../models');

const {Provincias} = Database;

Provincias.GetProvinciasById = async function(idDepartamentos){
    return Provincias.findAll({where:{departamentoId:idDepartamentos}});
};

module.exports = Provincias;