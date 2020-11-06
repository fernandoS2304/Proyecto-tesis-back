module.exports = {
    async up(queryInterface){
        return queryInterface.bulkInsert('Roles',[
            {
                id: 1,
                nombre: 'Administrador',
                descripcion: 'Administrador del sistema',
            },
            {
                id: 2,
                nombre: 'Poblador',
                descripcion:'Persona que realiza el reclamo',
            },
            {
                id: 3,
                nombre: 'Responsable',
                descripcion:'Persona que gestiona el reclamo',
            },
        ]);
    },
    down(queryInterface){
        return queryInterface.bulkDelete('Roles',null,{});
    },
};