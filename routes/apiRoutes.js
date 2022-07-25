const api = require("express").Router();

// Import our helper functions (read, write, getNotes, addNote, removeNote)
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
  //Signal the user that their post request has been calculated.
  return alert("New note has been added!");
});

// Delete a note from the page
api.delete("/notes/:id", (req, res) => {
  console.log(`${req.method} for /api/notes`);
  // removeNote will return an err if no id match exists
  store.removeNote(req.params.id);
  res.alert("The note has been deleted!");
});

module.exports = api;