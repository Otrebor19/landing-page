// config/db.js
const { Pool } = require('pg');
require('dotenv').config(); // Cargar variables de entorno desde el archivo .env

// Configura la conexión a la base de datos usando variables de entorno
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = pool;
