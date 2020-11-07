const Database = require('../models');

const {Evidencia} = Database;

Evidencia.CrearEvidencia = async function (payload){
    try{
        return await Evidencia.create(payload);
    }catch (error){
        console.log("Evidencia error", error)
        return null;
    }
};

Evidencia.ObtenerEvidencia = async function(idEvidencia){
    return await Evidencia.findOne({where:{id:idEvidencia}});
}

module.exports = Evidencia;