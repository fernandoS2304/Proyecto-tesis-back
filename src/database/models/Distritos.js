module.exports = (sequelize,DataTypes) => {
    const Distritos = sequelize.define('Distritos',{
        nombre:{
            allowNull: false,
            type: DataTypes.STRING
        },
        provinciaId: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {         
              model: 'Provincias',
              key: 'id'
            }
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
    Distritos.associate = function (models){
        Distritos.belongsTo(models.Departamento,{foreignKey: 'departamentoId', as: 'departamentos'})
    };
    Distritos.associate = function (models){
        Distritos.belongsTo(models.Provincia,{foreignKey: 'provinciaId', as: 'provincias'})
    };
    return Distritos;
}