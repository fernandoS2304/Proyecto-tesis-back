const express = require('express');

const router = express.Router();

// const Schemas = require('./schemas/index');

const UsuarioController = require('../controllers/UsuarioController');

// router.post('/addPoblador', Schemas.Usuario.agregarUsuarioPoblador, UsuarioController.agregarUsuarioPoblador); /* /usuario/addPoblador */
router.post('/addPoblador', UsuarioController.agregarUsuarioPoblador); /* /usuario/addPoblador */
router.post('/addResponsable', UsuarioController.agregarUsuarioResponsable); /* /usuario/addResponsable */
router.post('/login', UsuarioController.login); /* /usuario/login */


module.exports = router;