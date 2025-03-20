require('dotenv').config();
const express = require('express');
const app = express();
const { User } = require('./models');

app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Express + Sequelize + PostgreSQL!');
});

app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.post('/users', async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await User.create({ name, email, password });
  res.json(newUser);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});