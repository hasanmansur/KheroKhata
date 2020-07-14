'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/auth/restrict', (req, res) => {
  res.status(401);
  res.send('auth restricted');
});

app.get('/auth/allow', (req, res) => {
  res.status(200);
  res.send('auth allowed');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
