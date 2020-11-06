module.exports = (sequelize,DataTypes) => {
    const Estado = sequelize.define('Estados', {
        nombre:{
            allowNull: false,
            type: DataTypes.STRING
        },
        descripcion:{
            allowNull: false,
            type: DataTypes.STRING
        },
    });
    Estado.associate = function (models){
        Estado.hasMany(models.EstadoXHistorialAtencion, {as: 'estadoxhistorialatencion'})
    };
    return Estado;
}