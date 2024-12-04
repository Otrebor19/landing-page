const express = require('express');
const router = express.Router();
const { getServices, addService, updateService, deleteService } = require('../controllers/servicesController');

// Ruta para obtener todos los servicios
router.get('/services', getServices);

// Ruta para añadir un nuevo servicio
router.post('/services', addService);

// Ruta para actualizar un servicio existente
router.put('/services/:id', updateService);

// Ruta para eliminar un servicio existente
router.delete('/services/:id', deleteService);

module.exports = router;
