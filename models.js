const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'pets_lab_db',
  dialect: 'postgres',
  define: {
    underscored: true,
  },
});

const Kitten = sequelize.define('kitten', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
  breed: Sequelize.STRING,
});

const Doggo = sequelize.define('doggo', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
  breed: Sequelize.STRING,
});

module.exports = {
  sequelize,
  Doggo,
  Kitten,
};
