const express = require('express');
const cors = require('cors');
const app = express();
const featuresRoutes = require('./routes/featuresRoutes');
const servicesRoutes = require('./routes/servicesRoutes');
const adminRoutes = require('./routes/adminRoutes');
require('dotenv').config();


app.use(express.json());


app.use(cors());


app.use('/api', featuresRoutes);
app.use('/api', servicesRoutes);
app.use('/api', adminRoutes);

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
