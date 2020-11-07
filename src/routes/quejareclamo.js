const express = require('express');

const router = express.Router();

const QuejaReclamoController = require('../controllers/QuejaReclamoController');

router.post('/addQuejareclamo',QuejaReclamoController.agregarQuejaReclamo); /* /quejareclamo/addQuejareclamo */
router.get('/poblador/:idUsuario',QuejaReclamoController.listarQuejaReclamoPoblador); /* /quejareclamo/poblador/{idUsuario} */
router.get('/responsable/:idUsuario',QuejaReclamoController.listarQuejaReclamoResponsable); /* /quejareclamo/responsable/{idUsuario} */
router.post('/guardararchivo',QuejaReclamoController.guardarArchivo); /* /quejareclamo/guardararchivo/ */
router.put('/guardarevidencia',QuejaReclamoController.guardarEvidencia); /* /quejareclamo/guardarevidencia/ */

module.exports = router;