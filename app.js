
// these are the dependencies 
var express = require("express");
//var path = require("path");
//var fs =require("fs");

var app = express();

var PORT = process.env.PORT || 8080;

// this helps express app to handle JSON data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());





  //require("./routes/apiRoutes")(app);
  require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  
