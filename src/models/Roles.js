const Database = require('../models');

const {Rol} = Database;

Rol.Listar = async function () {
    return Rol.findAll();
};

module.exports = Rol;