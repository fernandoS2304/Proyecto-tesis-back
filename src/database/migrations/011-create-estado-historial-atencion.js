module.exports = {
    async up(queryInterface, Sequelize){
        await queryInterface.createTable('EstadoXHistorialAtenciones',{
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
                  model: 'Estados',
                  key: 'id'
                }
            },
            historialAtencionId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {         
                  model: 'HistorialAtenciones',
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
        return queryInterface.dropTable('EstadoXHistorialAtenciones');
    }
}