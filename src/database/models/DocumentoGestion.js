const { Sequelize, DataTypes } = require("sequelize/types");

module.exports = (sequelize,DataTypes) => {
    const DocumentoGestion = sequelize.define('DocumentoGestion', {
        documento:{
            allowNull: true,
            type: Sequelize.STRING
        },
    });
    return DocumentoGestion;
}