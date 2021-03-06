module.exports = {
    async up(queryInterface, Sequelize){
        await queryInterface.createTable('Pobladores',{
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
        return queryInterface.dropTable('Pobladores');
    }
}