module.exports = (sequelize,DataTypes) => {
    const Poblador = sequelize.define('Pobladores', {
        direccion:{
            allowNull: false,
            type: DataTypes.STRING
        },
        usuarioId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'Usuarios',
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