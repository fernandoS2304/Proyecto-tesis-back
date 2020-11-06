module.exports = {
    async up(queryInterface){
        return queryInterface.bulkInsert('Personas',[
            {
                id: 1,
                nombre: 'Fernando',
                apellidoP: 'Sandoval',
                apellidoM: 'Santillana',
                correo: 'a20125333@pucp.pe',
                telefono: '944208605',
                fechaNacimiento:new Date(1994,03,23),
                dni:'75768922',
            },
        ]);
    },
    down(queryInterface){
        return queryInterface.bulkDelete('Personas',null,{});
    },
};