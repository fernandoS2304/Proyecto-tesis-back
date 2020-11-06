module.exports = (sequelize,DataTypes) => {
    const Rol = sequelize.define('Roles', {
        nombre:{
            allowNull: false,
            type: DataTypes.STRING
        },
        descripcion:{
            allowNull: false,
            type: DataTypes.STRING
        },
    });
    return Rol;
}