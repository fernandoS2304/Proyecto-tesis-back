module.exports = (sequelize,DataTypes) => {
    const Usuario = sequelize.define('Usuarios', {
        nombreUsuario:{
            allowNull: false,
            type: DataTypes.STRING
        },
        contrasena:{
            allowNull: false,
            type: DataTypes.STRING
        },
        personaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {         
              model: 'Personas',
              key: 'id'
            }
        },
        rolesId: {
            type: DataTypes.INTEGER,
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
        Usuario.belongsTo(models.Rol,{foreignKey: 'rolesId', as: 'rol'})
    };
    return Usuario;
}