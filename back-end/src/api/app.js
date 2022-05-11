const express = require('express');
const routers = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

routers.map((router) => app.use('/', router));

module.exports = app;
