module.exports = {
    async up(queryInterface, Sequelize){
        await queryInterface.createTable('HistorialAtenciones',{
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            fechaInicio:{
                allowNull: true,
                type: Sequelize.DATE
            },
            fechaFin:{
                allowNull: true,
                type: Sequelize.DATE
            },
            comentario:{
                allowNull: true,
                type: Sequelize.TEXT
            },
            responsableId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                  model: 'Responsables',
                  key: 'id'
                }
            },
            quejaReclamoId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: false,
                references: {         
                  model: 'QuejaReclamos',
                  key: 'id'
                }
            },
            documentoGestionId: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {         
                  model: 'DocumentoGestiones',
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
        return queryInterface.dropTable('HistorialAtenciones');
    }
}