module.exports = {
    async up(queryInterface, Sequelize){
        await queryInterface.createTable('Responsables',{
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
                  model: 'Usuarios',
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
        return queryInterface.dropTable('Responsables');
    }
}