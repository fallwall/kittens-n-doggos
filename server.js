const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const app = express();
app.get("/", (req, res) => res.json({msg: 'ok'}))
app.use(logger('dev'));
app.use(bodyParser.json());

app.listen(PORT, () => console.log('up and running'))
