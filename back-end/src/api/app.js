const express = require('express');
const cors = require('cors');
const routers = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use('/images', express.static('public/res/images'));
app.use(express.json());

routers.map((router) => app.use('/', router));

module.exports = app;
