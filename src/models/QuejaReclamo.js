const Database = require('../models');

const {QuejaReclamo} = Database;

QuejaReclamo.CrearQuejaReclamo = async function (payload){
    try{
        return await QuejaReclamo.create(payload);
    }catch(error){
        console.log("QuejaReclamo error", error);
        return null;
    }
};

QuejaReclamo.ListarQuejaReclamoPoblador = async function (idPoblador){
    return await QuejaReclamo.findAll({where:{pobladorId:idPoblador}});
};

QuejaReclamo.ListarQuejaReclamoResponsable = async function (idQuejaReclamo){
    return await QuejaReclamo.findOne({where:{id:idQuejaReclamo}});
};

module.exports = QuejaReclamo;