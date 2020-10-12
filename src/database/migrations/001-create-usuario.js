const { Sequelize } = require("sequelize/types");

module.exports = {
    async up(queryInterface, Sequelize){
        await queryInterface.createTable('Usuario',{
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            nombreUsuario:{
                allowNull: false,
                type: Sequelize.STRING
            },
            contraseña:{
                allowNull: false,
                type: Sequelize.STRING
            },
            personaId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {         
                  model: 'Persona',
                  key: 'id'
                }
            },
            rolesId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {         
                  model: 'Roles',
                  key: 'id'
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
              updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        })
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('Usuario');
    }
}