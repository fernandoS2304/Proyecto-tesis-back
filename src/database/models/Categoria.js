const { Sequelize, DataTypes } = require("sequelize/types");

module.exports = (sequelize,DataTypes) => {
    const Categoria = sequelize.define('Categoria', {
        nombre:{
            allowNull: false,
            type: Sequelize.STRING
        },
        descripcion:{
            allowNull: false,
            type: Sequelize.STRING
        },
    });
    return Categoria;
}