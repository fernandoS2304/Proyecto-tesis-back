module.exports={
    async up(queryInterface, Sequelize){
        await queryInterface.createTable('Departamentos',{
            id:{
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            nombre:{
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
            },
        })
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('Departamentos');
    }
}