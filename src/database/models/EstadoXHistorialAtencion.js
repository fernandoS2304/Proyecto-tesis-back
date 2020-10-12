const { Sequelize, DataTypes } = require("sequelize/types");

module.exports = (sequelize,DataTypes) => {
    const EstadoXHistorialAtencion = sequelize.define('EstadoXHistorialAtencion', {
        estadoId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {    
              model: 'Estado',
              key: 'id'
            }
        },
        historialAtencionId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {         
              model: 'HistorialAtencion',
              key: 'id'
            }
        },
    });
    EstadoXHistorialAtencion.associate = function (models){
        EstadoXHistorialAtencion.belongsTo(models.Estado,{foreignKey: 'estadoId', as: 'estado'})
    };
    EstadoXHistorialAtencion.associate = function (models){
        EstadoXHistorialAtencion.belongsTo(models.HistorialAtencion,{foreignKey: 'historialAtencionId', as: 'historialatencion'})
    };
    return EstadoXHistorialAtencion;
}