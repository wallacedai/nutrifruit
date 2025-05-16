const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const favoriteRoutes = require('./routes/favorites');

const app = express();

mongoose.connect('mongodb://localhost:27017/nutrifruit', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/favorites', favoriteRoutes);

app.get('/', async (req, res) => {
  const response = await fetch('https://www.fruityvice.com/api/fruit/all');
  const fruits = await response.json();
  res.render('index', { fruits });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
