const express = require('express');
const path = require('path');

const app = express();

app.use('/static', (req, res) => {
  res.status(200).json({ data: 1 });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/test.html'));
});

app.listen(8080);