const pool = require('./config/db');
const bcrypt = require('bcrypt');

const insertAdminUser = async () => {
  const username = 'admin';
  const password = 'securepassword'; // Usa una contraseña fuerte

  try {
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    const result = await pool.query(
      'INSERT INTO users (username, password_hash) VALUES ($1, $2) RETURNING *',
      [username, password_hash]
    );

    console.log('Admin user created:', result.rows[0]);
  } catch (err) {
    console.error('Error inserting admin user:', err.message);
  } finally {
    pool.end();
  }
};

insertAdminUser();
