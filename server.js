const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.get("/", (req, res) => res.json({msg: 'ok'}))
app.use(logger('dev'));
app.use(bodyParser.json());

app.listen(3000, () => console.log('up and running'))
