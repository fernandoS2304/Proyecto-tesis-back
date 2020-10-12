const { Sequelize, DataTypes } = require("sequelize/types");

module.exports = (sequelize,DataTypes) => {
    const Roles = sequelize.define('Roles', {
        nombre:{
            allowNull: false,
            type: Sequelize.STRING
        },
        descripcion:{
            allowNull: false,
            type: Sequelize.STRING
        },
    });
    return Roles;
}