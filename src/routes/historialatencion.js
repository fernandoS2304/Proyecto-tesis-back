const express = require('express');

const router = express.Router();

const HistorialAtencion = require('../controllers/HistorialAtencionController');

router.post('/createHistorialAtencion',HistorialAtencion.agregarHistorialAtencion); /* /historialatencion/createHistorialAtencion */
router.put('/cambiarResponsable',HistorialAtencion.actualizarResponsable); /* /historialatencion/cambiarResponsable */
router.put('/asignarme',HistorialAtencion.asignarmeTicket); /* /historialatencion/asignarme */
router.put('/devolver',HistorialAtencion.devolverAlCliente); /* /historialatencion/devolver */
router.put('/aceptar',HistorialAtencion.aceptarSolucion); /* /historialatencion/aceptar */
router.put('/cancelar',HistorialAtencion.cancelarTicket); /* /historialatencion/cancelar */
router.put('/guardar',HistorialAtencion.guardarGestion); /* /historialatencion/guardar */
router.get('/:idQuejaReclamo', HistorialAtencion.listarHistorialAtencion); /* /historialatencion/{idQuejaReclamo} */
router.put('/asignarNuevoResponsable',HistorialAtencion.cambiarUsuarioResponsable); /* /historialatencion/asignarNuevoResponsable */
router.put('/guardardocgestion',HistorialAtencion.guardarDocGestion); /* /historialatencion/guardardocgestion/ */

module.exports = router;