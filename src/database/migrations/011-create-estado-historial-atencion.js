const { Sequelize } = require("sequelize/types");

module.exports = {
    async up(queryInterface, Sequelize){
        await queryInterface.createTable('EstadoXHistorialAtencion',{
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            estadoId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {    
                  model: 'Estado',
                  key: 'id'
                }
            },
            historialAtencionId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {         
                  model: 'HistorialAtencion',
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
        return queryInterface.dropTable('EstadoXHistorialAtencion');
    }
}