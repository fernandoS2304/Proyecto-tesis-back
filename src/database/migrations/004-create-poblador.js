const { Sequelize } = require("sequelize/types");

module.exports = {
    async up(queryInterface, Sequelize){
        await queryInterface.createTable('Poblador',{
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            direccion:{
                allowNull: false,
                type: Sequelize.STRING
            },
            usuarioId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                  model: 'Usuario',
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
        return queryInterface.dropTable('Poblador');
    }
}