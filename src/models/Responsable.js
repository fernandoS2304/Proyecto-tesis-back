const Database = require('../models');

const {Responsable} = Database;

Responsable.CrearResponsable = async function (payload){
    try{
        return await Responsable.create(payload);
    }catch(error){
        console.log("Reesponsable error",error)
        return null;
    }
};

Responsable.ListarResponsableArea = async function (payload){
    try{
        return await Responsable.findOne({where:{area:payload}});
    }catch(error){
        console.log("Responsables en esta area",error);
        return null;
    }
};

Responsable.GetResponsableById = async function (idResponsable){
    return Responsable.findOne({where:{id:idResponsable}});
}

Responsable.GetResponsableByUsuarioId = async function (idUsuario){
    return Responsable.findOne({where:{usuarioId:idUsuario}});
}

module.exports = Responsable;