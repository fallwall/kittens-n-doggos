const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

const main = async () => {
  await axios.delete(`${BASE_URL}/kittens/id/2`);
};

main();