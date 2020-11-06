module.exports = {
    async up(queryInterface, Sequelize){
        await queryInterface.createTable('Roles',{
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            nombre:{
                allowNull: false,
                type: Sequelize.STRING
            },
            descripcion:{
                allowNull: false,
                type: Sequelize.STRING
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
        return queryInterface.dropTable('Roles');
    }
}