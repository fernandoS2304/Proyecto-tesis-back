const express = require('express');

const router = express.Router();

const CategoriaController = require('../controllers/CategoriaController');

router.get('/:descripcion', CategoriaController.listarCategoriaPorTipo); /* /categoria/{descripcion}*/ 

module.exports = router;