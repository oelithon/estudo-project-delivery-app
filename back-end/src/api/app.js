const express = require('express');
const routers = require('../routes');

const app = express();

app.use(express.json());

routers.map((router) => app.use(router));

module.exports = app;
