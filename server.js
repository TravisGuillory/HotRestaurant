var express = require('express');
var path = require("path");

var app = express();
var PORT = 8000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Create arrays to hold basic data

let tables = []





// Routes for getting and posting data






// routres for displaying the html pages









app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

