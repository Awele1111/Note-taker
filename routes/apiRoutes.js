// const fs = require ("fs");
// const { uuid }= require("uuidv4");
// const router = require("express").Router();

// router.get("/notes", (req, res) => {
//     const data = fs.readFileSync("./db/db.json");
//     res.json(JSON.parse(data));
// })


// router.post("/notes", (req, res) => {
//     const notes = JSON.parse(fs.readFileSync("./db/db.json"));
//     const addNote = req.body;
//     addNote.id = uuid.v4();
//     console.log(addNote);
//     notes.push(addNote);
//     fs.writeFileSync("./db/db.json", JSON.stringify(notes));
//     res.json(notes);
// });

// router.delete("/notes/:id", (req, res) => {
//     const notes = JSON.parse(fs.readFileSync("./db/db.json")) ;
//     const eraseNote =notes.filter((rmvNote) => rmvNote.id !== req.params.id);
//     fs.writeFileSync("./db/db.json", JSON.stringify(eraseNote));
//     res.json(eraseNote);
// })

// module.exports = router
  

const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const express = require("express");
const router = express.Router();

router.get("/notes", (req, res) => {
  const data = fs.readFileSync("./db/db.json");
  const notes = JSON.parse(data);
  res.json(notes);
});

router.post("/notes", (req, res) => {
  const data = fs.readFileSync("./db/db.json");
  const notes = JSON.parse(data);
  const addNote = req.body;
  addNote.id = uuidv4();
  notes.push(addNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  res.json(notes);
});

router.delete("/notes/:id", (req, res) => {
  const data = fs.readFileSync("./db/db.json");
  const notes = JSON.parse(data);
  const eraseNote = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
  fs.writeFileSync("./db/db.json", JSON.stringify(eraseNote));
  res.json(eraseNote);
});

module.exports = router;
