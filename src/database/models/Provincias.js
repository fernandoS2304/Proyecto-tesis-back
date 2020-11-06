module.exports = (sequelize,DataTypes) => {
    const Provincias = sequelize.define('Provincias',{
        nombre:{
            allowNull: false,
            type: DataTypes.STRING
        },
        departamentoId: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {         
              model: 'Departamentos',
              key: 'id'
            }
        },
    });
    Provincias.associate = function (models){
        Provincias.belongsTo(models.Departamento,{foreignKey: 'departamentoId', as: 'departamentos'})
    };
    Provincias.associate = function (models){
        Provincias.hasMany(models.Distrito,{as:'distritos'})
    }
    return Provincias;
}