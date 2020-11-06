const express = require('express');

const router = express.Router();

const DepartamentosController = require('../controllers/DepartamentosController');

router.get('/list-all', DepartamentosController.listarDepartamentos); /* /departamentos/list-all */

module.exports = router;