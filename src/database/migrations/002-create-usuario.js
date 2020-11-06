module.exports = {
    async up(queryInterface, Sequelize){
        await queryInterface.createTable('Usuarios',{
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            nombreUsuario:{
                allowNull: false,
                type: Sequelize.STRING
            },
            contrasena:{
                allowNull: false,
                type: Sequelize.STRING
            },
            personaId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {         
                  model: 'Personas',
                  key: 'id'
                }
            },
            rolesId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {         
                  model: 'Roles',
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
        return queryInterface.dropTable('Usuarios');
    }
}