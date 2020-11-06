const express = require('express');

const router = express.Router();

const DistritosController = require('../controllers/DistritosController');

router.get('/:idProvincias', DistritosController.listarDistritos); /* /distritos/{idProvincias} */

module.exports = router;