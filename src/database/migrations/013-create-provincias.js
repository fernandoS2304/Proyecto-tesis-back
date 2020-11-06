module.exports={
    async up(queryInterface, Sequelize){
        await queryInterface.createTable('Provincias',{
            id:{
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            nombre:{
                allowNull: false,
                type: Sequelize.STRING
            },
            departamentoId:{
                type: Sequelize.STRING,
                allowNull: false,
                references: {         
                  model: 'Departamentos',
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
            },
        })
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('Provincias');
    }
}