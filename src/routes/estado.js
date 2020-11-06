const express = require('express');

const router = express.Router();

const EstadoController = require('../controllers/EstadoController');

router.get('list-all', EstadoController.listarEstado); /* /estado/list-all */

module.exports = router;