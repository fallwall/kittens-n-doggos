const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const kittenRouter = require('./routes/kittenRouter');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.get('/', (req, res) => res.json({ msg: 'ok' }));
app.use('/kittens', kittenRouter);

app.listen(PORT, () => console.log(`up and running on ${PORT}`));
