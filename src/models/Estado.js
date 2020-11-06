const Database = require('../models');

const {Estado} = Database;

Estado.Listar = async function (){
    return Estado.findAll();
}

Estado.GetEstadoById = async function (estadoId){
    return Estado.findOne({where:{id:estadoId}});
}

module.exports = Estado;