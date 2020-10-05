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


// Quick reference to Async files (save on some lines of code)
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Folder the browser can see
app.use(express.static("public"));


// Displays index when the application is loaded
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

// Displays notes
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});


// Displays a single character, or returns false
app.get("/api/notes", (req, res) => {

    readFileAsync("./db/db.json", "utf8")
        .then((result, err) => {
            if (err) console.log(err);
            return res.json(JSON.parse(result));
        });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});




// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});



//Get waffles
// (-_-)>#
// #<(-_-)>#
// (*_*)>#