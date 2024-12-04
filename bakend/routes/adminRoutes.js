const express = require('express');
const router = express.Router();
const { loginAdmin } = require('../controllers/adminController');

// Ruta para iniciar sesión como administrador
router.post('/admin/login', loginAdmin);

module.exports = router;
