const express = require('express');
const enrouten = require('express-enrouten');
const axios = require('axios');

const app = express();

app.use(enrouten({directory: `./src/controllers`}));

module.exports = app;
