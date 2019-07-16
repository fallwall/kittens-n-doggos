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

kittenRouter.get('/id/:id', async (req, res) => {
  const kitten = await Kitten.findByPk(req.params.id);
  res.json(kitten);
});

kittenRouter.get('/name/:name', async (req, res) => {
  const kitten = await Kitten.findOne({
    where: {
      name: req.params.name,
    },
  });
  res.json(kitten);
});

module.exports = kittenRouter;