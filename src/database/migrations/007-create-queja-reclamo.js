module.exports = {
    async up(queryInterface, Sequelize){
        await queryInterface.createTable('QuejaReclamos',{
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            titulo:{
                allowNull: false,
                type: Sequelize.STRING
            },
            direccion:{
                allowNull: false,
                type: Sequelize.STRING
            },
            departamento:{
                allowNull: false,
                type: Sequelize.STRING
            },
            provincia:{
                allowNull: false,
                type: Sequelize.STRING
            },
            distrito:{
                allowNull: false,
                type: Sequelize.STRING
            },
            sucesos:{
                allowNull: true,
                type: Sequelize.TEXT
            },
            fechaCreacion:{
                allowNull: false,
                type: Sequelize.DATE
            },
            pobladorId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {        
                  model: 'Pobladores',
                  key: 'id'
                }
            },
            evidenciasId: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                  model: 'Evidencias',
                  key: 'id'
                }
            },
            categoriaId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {         
                  model: 'Categorias',
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
        return queryInterface.dropTable('QuejaReclamos');
    }
}