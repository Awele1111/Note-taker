const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs'); // use fs.readFile method

// GET Route for feedback page
app.get('/notes', (req, res) => {
    console.log('GET /api/notes successful');
    res.json({ message: 'Success!' });
    // instead of the above response, you're going to need to
    // read the db.json file, located in /db/db.json, and then respond
    // with the contents of the file in json notation.
    // fs.readFile()...
});

app.post('/notes', (req, res) => {
    console.log('POST /api/notes successful');
    res.json({ message: 'Success!' });
    // instead of the above response, you're going to need to
    // read the db.json file, located in /db/db.json,
    // add the new note (read from the request body) to the
    // existing notes, and then write to /db/db.json
    // and then finally respond with the new notes as json
    // fs.readFile()..,
});

module.exports = app;