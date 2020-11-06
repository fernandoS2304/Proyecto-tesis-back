module.exports = {
    async up(queryInterface){
        return queryInterface.bulkInsert('Categorias',[
            {
                id: 1, 
                nombre: 'Inversion social',
                descripcion: 'Reclamo',
            },
            {
                id: 2, 
                nombre: 'Acceso a recursos comunales',
                descripcion: 'Reclamo',
            },
            {
                id: 3, 
                nombre: 'Empleo local',
                descripcion: 'Reclamo',
            },
            {
                id: 4, 
                nombre: 'Proveedurias locales',
                descripcion: 'Reclamo',
            },
            {
                id: 5, 
                nombre: 'Otros',
                descripcion: 'Reclamo',
            },
            {
                id: 6, 
                nombre: 'Daños ambientales',
                descripcion: 'Queja',
            },
            {
                id: 7, 
                nombre: 'Conducta inadecuada',
                descripcion: 'Queja',
            },
            {
                id: 8, 
                nombre: 'Respeto a la propiedad privada',
                descripcion: 'Queja',
            },
            {
                id: 9, 
                nombre: 'Muerte de animales',
                descripcion: 'Queja',
            },
            {
                id: 10, 
                nombre: 'Otros',
                descripcion: 'Queja',
            },
        ]);
    },
    down(queryInterface){
        return queryInterface.bulkDelete('Categorias',null,{});
    },
};