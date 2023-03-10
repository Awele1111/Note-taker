const path = require("path");
const router = require("express").Router();

// GET Route for homepage
router.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET Route for notes page
router.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router;