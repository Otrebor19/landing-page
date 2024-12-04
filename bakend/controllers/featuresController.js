const pool = require('../config/db');

// Obtener todas las características (features)
const getFeatures = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM features');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Añadir una nueva característica
const addFeature = async (req, res) => {
  const { title, description, icon } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO features (title, description, icon) VALUES ($1, $2, $3) RETURNING *',
      [title, description, icon]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar una característica existente
const updateFeature = async (req, res) => {
  const { id } = req.params;
  const { title, description, icon } = req.body;
  try {
    const result = await pool.query(
      'UPDATE features SET title = $1, description = $2, icon = $3 WHERE id = $4 RETURNING *',
      [title, description, icon, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Característica no encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar una característica existente
const deleteFeature = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM features WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Característica no encontrada' });
    }
    res.status(200).json({ message: 'Característica eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getFeatures,
  addFeature,
  updateFeature,
  deleteFeature,
};
