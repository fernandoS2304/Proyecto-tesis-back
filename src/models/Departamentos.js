const Database = require('../models');

const {Departamentos} = Database;

Departamentos.Listar = async function(){
    return Departamentos.findAll();
};

module.exports = Departamentos;