const Database = require('../models');

const {Persona} = Database;

Persona.CrearPersona = async function (payload){
    const t = await Database.sequelize.transaction();
    try{
        const data = await Persona.create(payload,{transaction: t,});
        await t.commit();
        return data;
    }catch(error){
        await t.rollback();
        throw error;
        return null;
    }
    // const t = await Database.sequelize.transaction();
    // try{
    //     const data = await Database.create(payload,{
    //         fields:[
    //             'nombre',
    //             'apellidoP',
    //             'apellidoM',
    //             'correo',
    //             'telefono',
    //             'fechaNacimiento',
    //             'dni',
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

Persona.GetPersonaById = async function (personaId){
    try{
        return await Persona.findOne({where:{id:personaId}});
    }catch(error){
        console.log("Persona no encontrado", error)
        return null;
    }
};

module.exports = Persona;