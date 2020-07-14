'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/bye', (req, res) => {
  res.send('Bye service');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
