const express = require('express');
const router = express.Router();
const { getFeatures, addFeature, updateFeature, deleteFeature } = require('../controllers/featuresController');

// Ruta para obtener todas las características
router.get('/features', getFeatures);

// Ruta para añadir una nueva característica
router.post('/features', addFeature);

// Ruta para actualizar una característica existente
router.put('/features/:id', updateFeature);

// Ruta para eliminar una característica existente
router.delete('/features/:id', deleteFeature);

module.exports = router;
