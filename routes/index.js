const express = require('express');
const usuarioController = require('../controller/usuario');

const router = express.Router();
router.post('/usuario', usuarioController.cadastrarUsuario);

module.exports = router;
