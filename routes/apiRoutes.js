const api = require("express").Router();

const store = require("../helpers/store");

// Get all the notes on page load
api.get("/notes", (req, res) => {
  console.log(`${req.method} for /api/notes`);
  store.getNotes().then((notes) => {
      res.json(notes)
  })
});

// Post a new note to the page
api.post("/notes", (req, res) => {
  console.log(`${req.method} for /api/notes`);
  store.addNote(req.body);
  res.json(req.body);
  return;
});

// Delete a note from the page
api.delete("/notes/:id", (req, res) => {
  console.log(`${req.method} for /api/notes`);
  if (!res) {
      console.log("err");
  } else {
      store.removeNote(req.params.id);
      res.status("Note deleted");
  }
});

module.exports = api;