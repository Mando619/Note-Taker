
// these are the dependencies 
var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

// this helps express app to handle JSON data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));
app.use(express.static("db"));


  require("./routes/apiRoutes.js")(app);
  require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  
