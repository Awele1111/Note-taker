const express = require('express');
const path = require('path');

const app = express();

// GET Route for feedback page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../../public/notes.html'))
);

// GET *, responds with index.html
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../../public/index.html'))
);



module.exports = app;