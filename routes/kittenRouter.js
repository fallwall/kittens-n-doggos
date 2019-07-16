const { Router } = require('express');
const { Kitten } = require('../models');

const kittenRouter = Router();
kittenRouter.get('/', async (req, res) => {
  const allKittens = await Kitten.findAll();
  res.json(allKittens);
});

module.exports = {
  kittenRouter,
};