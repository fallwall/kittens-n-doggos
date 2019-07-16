const { Router } = require('express');
const { Kitten } = require('../models');

const kittenRouter = Router();

kittenRouter.get('/', async (req, res) => {
  const allKittens = await Kitten.findAll();
  res.json(allKittens);
});

kittenRouter.post('/', async (req, res) => {
  const kitten = req.body;
  const newKitten = await Kitten.create(kitten);
  res.json(newKitten);
});

module.exports = kittenRouter;