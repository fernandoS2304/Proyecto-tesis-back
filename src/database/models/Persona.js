const { Sequelize, DataTypes } = require("sequelize/types");

module.exports = (sequelize,DataTypes) => {
    const Persona = sequelize.define('Persona', {
        nombre:{
            allowNull: false,
            type: Sequelize.STRING
        },
        apellidoP:{
            allowNull: false,
            type: Sequelize.STRING
        },
        apellidoM:{
            allowNull: false,
            type: Sequelize.STRING
        },
        correo:{
            allowNull: false,
            type: Sequelize.STRING
        },
        telefono:{
            allowNull: false,
            type: Sequelize.STRING
        },
        fechaNacimiento:{
            allowNull: false,
            type: Sequelize.DATE
        },
        dni:{
            allowNull: false,
            type: Sequelize.STRING
        },          
    });
    return Persona;
}