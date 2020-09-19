
const fs = require("fs");


module.exports = function (app) {

   // using JSON.parse to convert the text into a JavaScript object
   app.get("/api/notes/", function (req, res) {
      fs.readFile("db/db.json", "utf8", function (err, data) {
         if (err) throw err
         var newNotes = JSON.parse(data);
         res.json(newNotes);
      })
   });

   app.post("/api/notes/", function (req, res) {
      const newNotes = req.body
      console.log(newNotes)
      fs.readFile("db/db.json", "utf8", function (err, data) {
         const noteData = JSON.parse(data)
         // adding ID to each note when recorded
         noteData.push(newNotes);
         noteData.forEach((item, i) => item.id = i + 1);
         console.log(noteData);
         // using JSON stringify to return obect into a string.
         fs.writeFile("db/db.json", JSON.stringify(noteData), "utf8", function (err) {
            if (err) throw err
            console.log("Finished writing file")
         })
      })
   });

   app.delete("/api/notes/:id", function (req, res) {
      const noteId = req.params.id;
      fs.readFile("db/db.json", "utf8", function (err, data) {
         if (err) throw err
         console.log(noteId)

         const deleteNote = JSON.parse(data)
         console.log(deleteNote)
         // going through elements. using parceInt to return an integer id. then splice to return removed item
         deleteNote.forEach((element, index) => {
            if (parseInt(element.id) === parseInt(noteId)) {
               deleteNote.splice(index, 1);
            }
         });

         const noteString = JSON.stringify(deleteNote);
         fs.writeFile("db/db.json", noteString, function (err, data) {
            if (err) throw err
            res.send(JSON.parse(noteString));
         })
      })
   });
}
// Next is to work on deleting. Delete by using Id. use param

