const axios = require('axios');
const { Doggo } = require('./models');

const BASE_URL = 'http://localhost:3000';

const main = async () => {
  await Doggo.destroy({
    where: {},
  });
  const resp1 = await axios.post(`${BASE_URL}/doggos`, {
    name: 'Scramble',
    age: 2,
    breed: 'Jack Russell Terrier',
  });
  const resp2 = await axios.post(`${BASE_URL}/doggos`, {
    name: 'Snoopy',
    age: 100,
    breed: 'Beagle',
  });
  const resp3 = await axios.post(`${BASE_URL}/doggos`, {
    name: 'Lucas',
    age: 1,
    breed: 'Lab',
  });
};

main();