const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  name: String,
  user: String
});

module.exports = mongoose.model('Favorite', favoriteSchema);