module.exports = {
    async up(queryInterface){
        return queryInterface.bulkInsert('Departamentos',[
            {
                id:'01',
                nombre:'Amazonas'
            },
            {
                id: '02',
                nombre: 'Áncash'
            },
            {
                id: '03',
                nombre: 'Apurímac'
            },
            {
                id:'04',
                nombre: 'Arequipa'
            },
            {
                id:'05',
                nombre: 'Ayacucho'
            },
            {
                id:'06',
                nombre: 'Cajamarca'
            },
            {
                id: '07',
                nombre: 'Callao'
            },
            {
                id:'08',
                nombre: 'Cusco'
            },
            {
                id:'09',
                nombre:'Huancavelica'
            },
            {
                id:'10',
                nombre: 'Huánuco'
            },
            {
                id:'11',
                nombre: 'Ica'
            },
            {
                id:'12',
                nombre: 'Junín'
            },
            {
                id:'13',
                nombre: 'La Libertad'
            },
            {
                id:'14',
                nombre: 'Lambayeque'
            },
            {
                id:'15',
                nombre: 'Lima'
            },
            {
                id:'16',
                nombre: 'Loreto'
            },
            {
                id:'17',
                nombre: 'Madre de Dios'
            },
            {
                id:'18',
                nombre: 'Moquegua'
            },
            {
                id:'19',
                nombre: 'Pasco'
            },
            {
                id:'20',
                nombre: 'Piura'
            },
            {
                id:'21',
                nombre: 'Puno'
            },
            {
                id:'22',
                nombre: 'San Martín'
            },
            {
                id:'23',
                nombre: 'Tacna'
            },
            {
                id:'24',
                nombre: 'Tumbes'
            },
            {
                id:'25',
                nombre: 'Ucayali'
            },
        ]);
    },
    down(queryInterface){
        return queryInterface.bulkDelete('Departamentos',null,{});
    },
};