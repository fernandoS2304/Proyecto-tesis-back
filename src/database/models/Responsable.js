module.exports = (sequelize,DataTypes) => {
    const Responsable = sequelize.define('Responsables', {
        area:{
            allowNull: false,
            type: DataTypes.STRING
        },
        institucion:{
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
    Responsable.associate = function (models){
        Responsable.belongsTo(models.Usuario,{foreignKey: 'usuarioId', as: 'usuario'})
    };
    Responsable.associate = function (models){
        Responsable.hasMany(models.HistorialAtencion, {as: 'historialatencion'})
    };
    return Responsable;
}