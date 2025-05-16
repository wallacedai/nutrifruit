const express = require('express');
const router = express.Router();
const Favorite = require('../models/Favorite');

router.get('/submit', (req, res) => {
  res.render('submit');
});

router.post('/', async (req, res) => {
  const { name, user } = req.body;
  await Favorite.create({ name, user });
  res.redirect('/favorites/list');
});

router.get('/list', async (req, res) => {
  const favorites = await Favorite.find();
  res.render('list', { favorites });
});

module.exports = router;