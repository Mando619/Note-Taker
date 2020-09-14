



module.exports = function (app) {

   // using JSON.parse to convert the text into a JavaScript object
   app.get("/api/notes/", function (req, res) {
      fs.readFile("db/db.json", "utf8", function (err, data) {
         if (err) throw err
         var newNotes = JSON.parse(data);
         res.json(newNotes);
      })
   });

   app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, "public/index.html"));
   });

   app.post("/api/notes/", function (req, res) {
      var newNotes = req.body
      console.log(newNotes)
      fs.readFile("db/db.json", "utf8", function (err, data) {
         console.log(newNotes)
         if (err) throw err
         var noteData = JSON.parse(data)
       // adding ID to each note when recorded
         noteData.push(newNote);
         noteData.forEach((item, i) => item.id = i + 1);
         console.log(noteData);
       // using JSON stringify to return obect into a string.
         fs.writeFile("db/db.json", JSON.stringify(noteData), "utf8", function (err) {
            if (err) throw err
            console.log("Finished writing file")
         })
      })
   });
};