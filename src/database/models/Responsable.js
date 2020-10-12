const { Sequelize, DataTypes } = require("sequelize/types");

module.exports = (sequelize,DataTypes) => {
    const Responsable = sequelize.define('Responsable', {
        area:{
            allowNull: false,
            type: Sequelize.STRING
        },
        institucion:{
            allowNull: false,
            type: Sequelize.STRING
        },
        usuarioId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {         
              model: 'Usuario',
              key: 'id'
            }
        },        
    });
    Responsable.associate = function (models){
        Responsable.belongsTo(models.Usuario,{foreignKey: 'usuarioId', as: 'usuario'})
    };
    Responsable.associate = function (models){
        Responsable.hasMany(models.HistorialAtencion, {as: 'historialatencion'})
    };
    return Responsable;
}