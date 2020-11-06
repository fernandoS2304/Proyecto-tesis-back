module.exports={
    async up(queryInterface, Sequelize){
        await queryInterface.createTable('Distritos',{
            id:{
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            nombre:{
                allowNull: false,
                type: Sequelize.STRING
            },
            provinciaId:{
                type: Sequelize.STRING,
                allowNull: false,
                references: {         
                  model: 'Provincias',
                  key: 'id'
                }
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
        return queryInterface.dropTable('Distritos');
    }
}