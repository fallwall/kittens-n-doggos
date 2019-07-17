const axios = require('axios');

const main = async () => {
  await axios.delete('http://localhost:3000/kittens/id/2');
};

main();