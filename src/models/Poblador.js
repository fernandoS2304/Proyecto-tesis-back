const Database = require('../models');

const {Poblador} = Database;

Poblador.CrearPoblador = async function (payload){
    try{
        return await Poblador.create(payload);
    }catch(error){
        console.log("Poblador error", error)
        return null;
    }
    // const t = await Database.sequelize.transaction();
    // try{
    //     const data = await Database.create(payload,{
    //         field:[
    //             'direccion',
    //             'usuarioId',
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

Poblador.GetPobladorById = async function (idUsuario){
    return Poblador.findOne({where:{usuarioId:idUsuario}})
}

module.exports = Poblador;