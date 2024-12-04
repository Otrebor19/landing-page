const pool = require('../config/db');
const bcrypt = require('bcrypt');

// Función para verificar las credenciales del administrador
const loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const admin = result.rows[0];
    const isMatch = await bcrypt.compare(password, admin.password_hash);
    if (!isMatch) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    res.status(200).json({ message: 'Inicio de sesión exitoso', admin });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  loginAdmin,
};
