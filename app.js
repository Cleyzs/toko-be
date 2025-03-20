require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Express + Sequelize + PostgreSQL!');
});

app.use('/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});