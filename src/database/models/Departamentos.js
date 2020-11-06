module.exports = (sequelize,DataTypes) => {
    const Departamentos = sequelize.define('Departamentos',{
        nombre:{
            allowNull: false,
            type: DataTypes.STRING
        },
    });
    Departamentos.associate = function (models){
        Departamentos.hasMany(models.Provincia,{as:'provincias'})
    }
    Departamentos.associate = function (models){
        Departamentos.hasMany(models.Provincia,{as:'distritos'})
    }
    return Departamentos;
}