const fs = require("fs");
const util = require("util");
const uuid = require("./uuid");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  read() {
    return readFileAsync("db/db.json", "utf8");
  }

  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }

  getNotes() {
    return this.read().then((notes) => {
      // Obtain the existing notes and turn the string of arrays into a JSON array.
      const existingNotes = JSON.parse(notes)
      return existingNotes;
    })
  }

  addNote(note) {
    //Deconstruct the title and text from note.
    const { title, text } = note;
    // Give the new note an random id.
    const newNote = { title, text, id: uuid() };
    newNote.title = title;
    newNote.text = text;
    // Now that newNote has all the keys we need, read the existingNotes and append the newNote.
    this.getNotes().then((data) => {
      data.push(newNote);
      // Stringify the JSON array and overwrite db.json with newly appended data.
      this.write(data);
    })
  }

  // To remove a note we need its unique id.
  removeNote(id) {
    // Read through all existingNotes to find the note with a matching id
    this.getNotes().then((notes) => {
      for (let i = 0; i < notes.length; i++) {
        if (id === notes[i].id) {
          // If we found a matching id, remove it from the database
          notes.splice(i, 1)
          return notes;
        }
        return console.error(err);
      }
      // After removing the note from the array object, overwrite db.json with the updated data.
    }).then((updatedDatabase) => {
      this.write(updatedDatabase)
    });
    return;
  }
}

module.exports = new Store();