const { Sequelize } = require("sequelize/types");

module.exports = {
    async up(queryInterface, Sequelize){
        await queryInterface.createTable('Responsable',{
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            area:{
                allowNull: false,
                type: Sequelize.STRING
            },
            institucion:{
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
        return queryInterface.dropTable('Responsable');
    }
}