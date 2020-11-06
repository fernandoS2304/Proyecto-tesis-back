module.exports = (sequelize,DataTypes) => {
    const DocumentoGestion = sequelize.define('DocumentoGestiones', {
        titulo:{
            allowNull: true,
            type: DataTypes.STRING
        },
        documento:{
            allowNull: true,
            type: DataTypes.STRING
        },
    });
    return DocumentoGestion;
}