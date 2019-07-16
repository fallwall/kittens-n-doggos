const axios = require('axios');

const main = async () => {
  const resp = await axios.post('http://localhost:3000/kittens', {
    name: 'roe',
    age: 2,
    breed: 'vicious kind',
  });
  console.log(resp.data);
};

main();