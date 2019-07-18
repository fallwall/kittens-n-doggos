const axios = require('axios');
const { Kitten } = require('./models');

const BASE_URL = 'http://localhost:3000';

const main = async () => {
  await Kitten.destroy({
    where: {},
  });
  const resp1 = await axios.post(`${BASE_URL}/kittens`, {
    name: 'roe',
    age: 2,
    breed: 'taxedo cat',
  });
  const resp2 = await axios.post(`${BASE_URL}/kittens`, {
    name: 'simba',
    age: 1,
    breed: 'ginger cat',
  });
  const resp3 = await axios.post(`${BASE_URL}/kittens`, {
    name: 'nala',
    age: 1,
    breed: 'ginger cat',
  });
};

main();