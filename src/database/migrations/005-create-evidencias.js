module.exports = {
    async up(queryInterface, Sequelize){
        await queryInterface.createTable('Evidencias',{
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            titulo:{
                allowNull: true,
                type: Sequelize.STRING
            },
            documento:{
                allowNull: true,
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
        return queryInterface.dropTable('Evidencias');
    }
}