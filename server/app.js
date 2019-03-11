const express = require('express');
const enrouten = require('express-enrouten');
const cors = require('cors');

const app = express();

// Add headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(cors());

app.use(enrouten({directory: `./src/controllers`}));

module.exports = app;
