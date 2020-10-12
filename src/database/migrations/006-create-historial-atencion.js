const { Sequelize } = require("sequelize/types");

module.exports = {
    async up(queryInterface, Sequelize){
        await queryInterface.createTable('HistorialAtencion',{
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            fechaInicio:{
                allowNull: false,
                type:Sequelize.DATE
            },
            fechaFin:{
                allowNull: true,
                type:Sequelize.DATE
            },
            comentario:{
                allowNull: true,
                type: Sequelize.TEXT
            },
            responsableId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                  model: 'Responsable',
                  key: 'id'
                }
            },
            quejaReclamoId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {         
                  model: 'QuejaReclamo',
                  key: 'id'
                }
            },
            documentoGestionId: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {         
                  model: 'DocumentoGestion',
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
        return queryInterface.dropTable('HistorialAtencion');
    }
}