const axios = require('axios');
const { Kitten } = require('./models');

const main = async () => {
  await Kitten.destroy({
    where: {},
  });
  const resp1 = await axios.post('http://localhost:3000/kittens', {
    name: 'roe',
    age: 2,
    breed: 'taxedo cat',
  });
  const resp2 = await axios.post('http://localhost:3000/kittens', {
    name: 'simba',
    age: 1,
    breed: 'ginger cat',
  });
  const resp3 = await axios.post('http://localhost:3000/kittens', {
    name: 'nala',
    age: 1,
    breed: 'ginger cat',
  });
};

main();