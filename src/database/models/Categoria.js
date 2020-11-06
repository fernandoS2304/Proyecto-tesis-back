module.exports = (sequelize,DataTypes) => {
    const Categoria = sequelize.define('Categorias', {
        nombre:{
            allowNull: false,
            type: DataTypes.STRING
        },
        descripcion:{
            allowNull: false,
            type: DataTypes.STRING
        },
    });
    return Categoria;
}