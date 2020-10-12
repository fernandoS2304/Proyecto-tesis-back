const { Sequelize } = require("sequelize/types");

module.exports = {
    async up(queryInterface, Sequelize){
        await queryInterface.createTable('Persona',{
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            nombre:{
                allowNull: false,
                type: Sequelize.STRING
            },
            apellidoP:{
                allowNull: false,
                type: Sequelize.STRING
            },
            apellidoM:{
                allowNull: false,
                type: Sequelize.STRING
            },
            correo:{
                allowNull: false,
                type: Sequelize.STRING
            },
            telefono:{
                allowNull: false,
                type: Sequelize.STRING
            },
            fechaNacimiento:{
                allowNull: false,
                type: Sequelize.DATE
            },
            dni:{
                allowNull: false,
                type: Sequelize.STRING
            },    
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
              updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
        })
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('Persona');
    }
}