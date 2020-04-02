var express = require('express');
var path = require("path");
var apiRoute = require("./routes/apiRoute");
var htmlRoute = require("./routes/htmlRoute");


var app = express();
var PORT = 8000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Create arrays to hold basic data

let tables = [] ;

let waitList = [];





// Routes for getting and posting data

app.get("/html", function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html" ))
})


app.post("/html", function(req, res){
    // re.join some stuff here
    
    //  res.join()
})


// routes for displaying the html pages



console.log("Hello World");





app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

