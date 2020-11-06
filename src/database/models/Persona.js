module.exports = (sequelize,DataTypes) => {
    const Persona = sequelize.define('Personas', {
        nombre:{
            allowNull: false,
            type: DataTypes.STRING
        },
        apellidoP:{
            allowNull: false,
            type: DataTypes.STRING
        },
        apellidoM:{
            allowNull: false,
            type: DataTypes.STRING
        },
        correo:{
            allowNull: false,
            type: DataTypes.STRING
        },
        telefono:{
            allowNull: false,
            type: DataTypes.STRING
        },
        fechaNacimiento:{
            allowNull: false,
            type: DataTypes.DATE
        },
        dni:{
            allowNull: false,
            type: DataTypes.STRING
        },          
    });
    return Persona;
}