const { Router } = require('express');
const { Doggo } = require('../models');

const doggoRouter = Router();

doggoRouter.get('/', async (req, res) => {
  const allDoggos = await Doggo.findAll();
  res.json(allDoggos);
});

doggoRouter.post('/', async (req, res) => {
  const doggo = req.body;
  const newDoggo = await Doggo.create(doggo);
  res.json(newDoggo);
});

doggoRouter.get('/id/:id', async (req, res) => {
  const doggo = await Doggo.findByPk(req.params.id);
  res.json(doggo);
});

doggoRouter.delete('/id/:id', async (req, res) => {
  const doggo = await Doggo.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(doggo);
});

doggoRouter.put('/id/:id', async (req, res) => {
  try {
    const data = req.body;
    const doggo = await Doggo.update(
      data,
      {
        where: {
          id: req.params.id,
        },
      });
    const updatedDoggo = await Doggo.findByPk(req.params.id);
    res.json(updatedDoggo);
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
});

doggoRouter.get('/name/:name', async (req, res) => {
  const doggo = await Doggo.findOne({
    where: {
      name: req.params.name,
    },
  });
  res.json(doggo);
});

doggoRouter.delete('/name/:name', async (req, res) => {
  const doggo = await Doggo.destroy({
    where: {
      name: req.params.name,
    },
  });
  res.json(doggo);
});

doggoRouter.put('/name/:name', async (req, res) => {
  try {
    const data = req.body;
    const doggo = await Doggo.update(
      data,
      {
        where: {
          name: req.params.name,
        },
      },
    );
    const updatedDoggo = await Doggo.findOne({
      where: {
        name: req.params.name,
      },
    });
    res.json(updatedDoggo);
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
});

module.exports = doggoRouter;