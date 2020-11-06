module.exports = {
    async up(queryInterface){
        return queryInterface.bulkInsert('Estados',[
            {
                id: 1,
                nombre: 'Por atender',
                descripcion: 'Cuando el ticket sol oesta creado pero no gestionado',
            },
            {
                id: 2,
                nombre: 'En ejecucion',
                descripcion: 'Cuando el ticket esta siendo gestionado',
            },

            {
                id: 3,
                nombre: 'En espera del cliente',
                descripcion: 'Cuando el ticket espera una respuesta del poblador',
            },
            {
                id: 4,
                nombre: 'Solucionado',
                descripcion: 'Cuando la gestion a terminado',
            },
            {
                id: 5,
                nombre: 'Cancelado',
                descripcion: 'Cuando el ticket ha sido cancelado',
            },
        ]);
    },
    down(queryInterface){
        return queryInterface.bulkDelete('Estados',null,{});
    },
};