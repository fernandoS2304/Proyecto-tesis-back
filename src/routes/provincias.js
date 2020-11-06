const express = require('express');

const router = express.Router();

const ProvinciasController = require('../controllers/ProvinciasController');

router.get('/:idDepartamentos', ProvinciasController.listarProvincias); /* /provincias/{idDepartamentos} */

module.exports = router;