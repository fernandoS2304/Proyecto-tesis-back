module.exports = {
    async up(queryInterface){
        return queryInterface.bulkInsert('Usuarios',[
            {
                id: 1,
                nombreUsuario:'admin',
                contrasena:'admin',
                personaId: 1,
                rolesId: 1,
            },
        ]);
    },
    down(queryInterface){
        return queryInterface.bulkDelete('Usuarios',null,{});
    },
};