const { Sequelize, DataTypes } = require("sequelize/types");

module.exports = (sequelize,DataTypes) => {
    const QuejaReclamo = sequelize.define('QuejaReclamo', {
        codigo:{
            allowNull: false,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        titulo:{
            allowNull: false,
            type: Sequelize.STRING
        },
        departamento:{
            allowNull: false,
            type: Sequelize.STRING
        },
        provincia:{
            allowNull: false,
            type: Sequelize.STRING
        },
        distrito:{
            allowNull: false,
            type: Sequelize.STRING
        },
        sucesos:{
            allowNull: true,
            type: Sequelize.TEXT
        },
        fechaCreacion:{
            allowNull: false,
            type: Sequelize.DATE
        },
        pobladorId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {        
              model: 'Poblador',
              key: 'id'
            }
        },
        evidenciasId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'Evidencias',
              key: 'id'
            }
        },
        categoriaId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {         
              model: 'Categoria',
              key: 'id'
            }
        },
        
    });
    QuejaReclamo.associate = function (models){
        QuejaReclamo.belongsTo(models.Poblador,{foreignKey: 'pobladorId', as: 'poblador'})
    };
    QuejaReclamo.associate = function (models){
        QuejaReclamo.belongsTo(models.Evidencias,{foreignKey: 'evidenciasId', as: 'evidencia'})
    };
    QuejaReclamo.associate = function (models){
        QuejaReclamo.belongsTo(models.Categoria,{foreignKey: 'categoriaId', as: 'categoria'})
    };
    QuejaReclamo.associate = function (models){
        QuejaReclamo.hasMany(models.HistorialAtencion, {as: 'historialatencion'})
    };
    return QuejaReclamo;
}