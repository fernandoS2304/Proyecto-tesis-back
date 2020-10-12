const { Sequelize, DataTypes } = require("sequelize/types");

module.exports = (sequelize,DataTypes) => {
    const Poblador = sequelize.define('Poblador', {
        direccion:{
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
    Poblador.associate = function (models){
        Poblador.belongsTo(models.Usuario,{foreignKey: 'usuarioId', as: 'usuario'})
    };
    Poblador.associate = function (models){
        Poblador.hasMany(models.QuejaReclamo, {as: 'quejareclamo'})
    };
    return Poblador;
}