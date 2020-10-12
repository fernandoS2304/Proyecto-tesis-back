const { Sequelize, DataTypes } = require("sequelize/types");

module.exports = (sequelize,DataTypes) => {
    const Evidencia = sequelize.define('Evidencia', {
        documento:{
            allowNull: true,
            type: Sequelize.STRING
        },
    });
    return Evidencia;
}