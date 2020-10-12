const { Sequelize, DataTypes } = require("sequelize/types");

module.exports = (sequelize,DataTypes) => {
    const HistorialAtencion = sequelize.define('HistorialAtencion', {
        fechaInicio:{
            allowNull: false,
            type:Sequelize.DATE
        },
        fechaFin:{
            allowNull: true,
            type:Sequelize.DATE
        },
        comentario:{
            allowNull: true,
            type: Sequelize.TEXT
        },
        responsableId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'Responsable',
              key: 'id'
            }
        },
        quejaReclamoId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {         
              model: 'QuejaReclamo',
              key: 'id'
            }
        },
        documentoGestionId: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {         
              model: 'DocumentoGestion',
              key: 'id'
            }
        },
    });
    HistorialAtencion.associate = function (models){
        HistorialAtencion.belongsTo(models.Responsable,{foreignKey: 'responsableId', as: 'responsable'})
    };
    HistorialAtencion.associate = function (models){
        HistorialAtencion.belongsTo(models.QuejaReclamo,{foreignKey: 'quejaReclamoId', as: 'quejareclamo'})
    };
    HistorialAtencion.associate = function (models){
        HistorialAtencion.belongsTo(models.DocumentoGestion,{foreignKey: 'documentoGestionId', as: 'documentogestion'})
    };
    HistorialAtencion.associate = function (models){
        HistorialAtencion.hasMany(models.EstadoXHistorialAtencion, {as: 'estadoxhistorialatencion'})
    };
    return HistorialAtencion;
}