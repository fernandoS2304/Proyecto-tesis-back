const Database = require('../models');

const {HistorialAtencion} = Database;

HistorialAtencion.CrearHistorialAtencion = async function (payload){
    try{
        return await HistorialAtencion.create(payload);
    }catch(error){
        console.log("HistorialAtencion error", error);
        return null;
    }
};

HistorialAtencion.CambiarResponsable = async function (payload){
    try{
        return await HistorialAtencion.update(
            {
                responsableId:payload.responsableId,
            },
            {
                where: {
                    id: payload.id,
                }
            }
        )
    }catch(error){
        console.log('Actualizar HistorialAtencion Responsable', error);
        return null;
    }
}

HistorialAtencion.AsignarTicket = async function (payload){
    try{
        return await HistorialAtencion.update(
            {
                fechaInicio: payload.fechaInicio,
            },
            {
                where: {
                    id: payload.id,
                }
            }
        )
    }catch(error){
        console.log("Asignar Ticket", error);
        return null;
    }
}

HistorialAtencion.DevolverCliente = async function (payload){
    try{
        return await HistorialAtencion.update(
            {
                fechaFin: payload.fechaFin,
            },
            {
                where: {
                    id: payload.id,
                }
            }
        )
    }catch(error){
        console.log("Devolver cliente Ticket", error);
        return null;
    }
}

HistorialAtencion.Solucionar = async function (payload){
    try{
        return await HistorialAtencion.update(
            {
                fechaFin: payload.fechaFin,
            },
            {
                where: {
                    id: payload.id,
                }
            }
        )
    }catch(error){
        console.log("Solucionar Ticket", error);
        return null;
    }
}

HistorialAtencion.Guardar = async function (payload){
    try{
        return await HistorialAtencion.update(
            {
                comentario: payload.comentario,
                

            },
            {
                where: {
                    id: payload.id,
                }
            }
        )
    }catch(error){
        console.log("Solucionar Ticket", error);
        return null;
    }
}

HistorialAtencion.ListarByQuejasId = async function (idQuejaReclamo){
    return HistorialAtencion.findAll({where:{quejaReclamoId:idQuejaReclamo}})
};

HistorialAtencion.ListarByHistorialId = async function (idHistorialAtencion,idResponsable){
    return HistorialAtencion.findOne({where:{id:idHistorialAtencion, responsableId:idResponsable}})
};

module.exports = HistorialAtencion;