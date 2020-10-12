const { Sequelize, DataTypes } = require("sequelize/types");

module.exports = (sequelize,DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        nombreUsuario:{
            allowNull: false,
            type: Sequelize.STRING
        },
        contraseña:{
            allowNull: false,
            type: Sequelize.STRING
        },
        personaId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {         
              model: 'Persona',
              key: 'id'
            }
        },
        rolesId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {         
              model: 'Roles',
              key: 'id'
            }
        },          
    });
    Usuario.associate = function (models){
        Usuario.belongsTo(models.Persona,{foreignKey: 'personaId', as: 'persona'})
    };
    Usuario.associate = function (models){
        Usuario.belongsTo(models.Roles,{foreignKey: 'rolesId', as: 'roles'})
    };
    return Usuario;
}