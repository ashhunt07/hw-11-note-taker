// Dependencies
const express = require("express");

//sets up the path to load an html file
const path = require("path");

//will help setting up promises for reading and writing files
const util = require('util');

//
const fs = require("fs");

// Sets up the Express App and PORT
const app = express();
const PORT = process.env.PORT || 9000;


// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});



//Get waffles
// (-_-)>#
// #<(-_-)>#
// (*_*)>#