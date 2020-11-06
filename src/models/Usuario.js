const Database = require('../models');

const {Usuario} = Database;

Usuario.Listar = async function (){
    return Usuario.findAll();
};

Usuario.CrearUsuarioPoblador = async function (payload){
    try{
        return await Usuario.create(payload);
    }catch(error){
        console.log("Usuario error", error)
        return null;
    }
    // const t = await Database.sequelize.transaction();
    // try{
    //     const data = await Database.create(payload,{
    //         fields:[
    //             'nombreUsuario',
    //             'contrasena',
    //             'personaId',
    //             'rolesId',
    //         ],
    //         transaction: t,
    //     });
    //     await t.commit();
    //     return data;
    // }catch (err){
    //     await t.rollback();
    //     throw err;
    // }
};

Usuario.CrearUsuarioResponsable = async function (payload){
    try{
        return await Usuario.create(payload);
    }catch(error){
        console.log("Usuario error", error)
        return null;
    }
};

Usuario.GetUsuarioByUsername = async function (userName){
    try{
        return await Usuario.findOne({where:{nombreUsuario:userName}});
    }catch(error){
        console.log("Usuario no encontrado", error)
        return null;
    }
};

Usuario.GetUsuarioByUsuarioId = async function (userId){
    try{
        return await Usuario.findOne({where:{id:userId}});
    }catch(error){
        console.log("Usuario no encontrado", error)
        return null;
    }
};

module.exports = Usuario;