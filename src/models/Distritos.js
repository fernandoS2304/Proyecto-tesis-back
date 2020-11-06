const Database = require('../models');

const {Distritos} = Database;

Distritos.GetDistritosById = async function(idProvincias){
    return Distritos.findAll({where:{provinciaId:idProvincias}});
};

module.exports = Distritos;