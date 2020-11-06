const express = require('express');

const router = express.Router();

const RolesController = require('../controllers/RolesController');

router.get('/list-all',RolesController.listarRoles); /* /roles/lista-all */

module.exports = router;