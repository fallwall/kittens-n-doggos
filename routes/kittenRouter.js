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

kittenRouter.delete('/id/:id', async (req, res) => {
  const kitten = await Kitten.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(kitten);
});

kittenRouter.put('/id/:id', async (req, res) => {
  try {
    const data = req.body;
    const kitten = await Kitten.update(
      data,
      {
        where: {
          id: req.params.id,
        },
      });
    const updatedKitten = await Kitten.findByPk(req.params.id);
    res.json(updatedKitten);
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
});

kittenRouter.get('/name/:name', async (req, res) => {
  const kitten = await Kitten.findOne({
    where: {
      name: req.params.name,
    },
  });
  res.json(kitten);
});

kittenRouter.delete('/name/:name', async (req, res) => {
  const kitten = await Kitten.destroy({
    where: {
      name: req.params.name,
    },
  });
  res.json(kitten);
});

kittenRouter.put('/name/:name', async (req, res) => {
  try {
    const data = req.body;
    const kitten = await Kitten.update(
      data,
      {
        where: {
          name: req.params.name,
        },
      },
    );
    const updatedKitten = await Kitten.findOne({
      where: {
        name: req.params.name,
      },
    });
    res.json(updatedKitten);
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
});

module.exports = kittenRouter;