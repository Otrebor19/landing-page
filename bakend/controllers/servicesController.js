const pool = require('../config/db');

// Obtener todos los servicios
const getServices = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM services');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Añadir un nuevo servicio
const addService = async (req, res) => {
  const { image_url, service_name, description } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO services (image_url, service_name, description) VALUES ($1, $2, $3) RETURNING *',
      [image_url, service_name, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar un servicio existente
const updateService = async (req, res) => {
  const { id } = req.params;
  const { image_url, service_name, description } = req.body;
  try {
    const result = await pool.query(
      'UPDATE services SET image_url = $1, service_name = $2, description = $3 WHERE id = $4 RETURNING *',
      [image_url, service_name, description, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Servicio no encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar un servicio existente
const deleteService = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM services WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Servicio no encontrado' });
    }
    res.status(200).json({ message: 'Servicio eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getServices,
  addService,
  updateService,
  deleteService,
};
