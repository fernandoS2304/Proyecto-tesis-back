const express = require('express');

const router = express.Router();

const EvidenciaController = require('../controllers/EvidenciaController');

router.get('/:idEvidencia',EvidenciaController.ObtenerEvidencia); /* /evidencia/{idEvidencia} */

module.exports = router;