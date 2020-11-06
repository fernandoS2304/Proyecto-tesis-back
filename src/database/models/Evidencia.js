module.exports = (sequelize,DataTypes) => {
    const Evidencia = sequelize.define('Evidencias', {
        titulo:{
            allowNull: true,
            type: DataTypes.STRING
        },
        documento:{
            allowNull: true,
            type: DataTypes.STRING
        },
    });
    return Evidencia;
}