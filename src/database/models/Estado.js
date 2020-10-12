const { Sequelize, DataTypes } = require("sequelize/types");

module.exports = (sequelize,DataTypes) => {
    const Estado = sequelize.define('Estado', {
        nombre:{
            allowNull: false,
            type: Sequelize.STRING
        },
        descripcion:{
            allowNull: false,
            type: Sequelize.STRING
        },
    });
    Estado.associate = function (models){
        Estado.hasMany(models.EstadoXHistorialAtencion, {as: 'estadoxhistorialatencion'})
    };
    return Estado;
}