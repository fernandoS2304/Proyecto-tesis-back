const Database = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const {EstadoXHistoriaAtencion} = Database;

EstadoXHistoriaAtencion.Crear = async function(payload){
    try{
        return await EstadoXHistoriaAtencion.create(payload);
    }catch(error){
        console.log("EstadoXHistoriaAtencion error", error);
        return null;
    }
}

EstadoXHistoriaAtencion.Asignar = async function(payload){
    try{
        return await EstadoXHistoriaAtencion.update(
            {
                estadoId: 2,
            },
            {
                where: {
                    historialAtencionId: payload.historialAtencionId,
                }
            }
        )
    }catch(error){
        console.log("Asignar Estado", error);
        return null;
    }
}

EstadoXHistoriaAtencion.Devolver = async function(payload){
    try{
        return await EstadoXHistoriaAtencion.update(
            {
                estadoId: 3,
            },
            {
                where: {
                    historialAtencionId: payload.historialAtencionId,
                }
            }
        )
    }catch(error){
        console.log("Devolver cliente Estado", error);
        return null;
    }
}

EstadoXHistoriaAtencion.Solucionar = async function(payload){
    try{
        return await EstadoXHistoriaAtencion.update(
            {
                estadoId: 4,
            },
            {
                where: {
                    historialAtencionId: payload.historialAtencionId,
                }
            }
        )
    }catch(error){
        console.log("Solucionado Estado", error);
        return null;
    }
}

EstadoXHistoriaAtencion.Cancelar = async function(payload){
    try{
        return await EstadoXHistoriaAtencion.update(
            {
                estadoId: 5,
            },
            {
                where: {
                    historialAtencionId: payload.historialAtencionId,
                }
            }
        )
    }catch(error){
        console.log("Cancelar Estado", error);
        return null;
    }
}

EstadoXHistoriaAtencion.GetEstadoXHistorialById = async function(idHistorialAtencion){
    return EstadoXHistoriaAtencion.findOne({where:{historialAtencionId:idHistorialAtencion}});
}

EstadoXHistoriaAtencion.Listar = async function(){
    return EstadoXHistoriaAtencion.findAll({where:{estadoId:{[Op.or]:[1,2,3]}}})    
}

module.exports = EstadoXHistoriaAtencion;