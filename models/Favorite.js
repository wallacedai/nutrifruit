const mongoose = require('mongoose');

const fav = new mongoose.Schema({
  name: String,
  user: String
});

module.exports = mongoose.model('Favorite', fav);