'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/hello', (req, res) => {
  res.send('Hello service');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
