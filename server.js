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


//Saves a note
app.post("/api/notes", (req, res) => {
    let newNote = req.body;

    readFileAsync("./db/db.json", "utf8")
        .then((result, err) => {
            if (err) console.log(err);
            return Promise.resolve(JSON.parse(result));
        })
        .then(data => {

            newNote.id = getLastIndex(data) + 1;

            (data.length > 0) ? data.push(newNote): data = [newNote];
            return Promise.resolve(data);
        })
        .then(data => {
            //write the new file
            writeFileAsync("./db/db.json", JSON.stringify(data));
            res.json(newNote);
        })
        .catch(err => {
            if (err) throw err;
        });
});


//Deletes saved note
app.delete('/api/notes/:id', (req, res) => {

    let id = req.params.id;

    readFileAsync("./db/db.json", "utf8")
        .then((result, err) => {
            if (err) console.log(err);
            return Promise.resolve(JSON.parse(result));
        })
        .then(data => {

            data.splice(data.indexOf(data.find(element => element.id == id)), 1);
            return Promise.resolve(data);
        })
        .then(data => {

            writeFileAsync("./db/db.json", JSON.stringify(data));
            res.send("OK");
        })
        .catch(err => {
            if (err) throw err;
        });
});


// Console log if user gets a 404 message
app.use(function(req, res, next) {
    res.status(404).send("Sorry, we couldn't find that!")
})


function getLastIndex(data) {
    if (data.length > 0) return data[data.length - 1].id;
    return 0;
}

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});



//Get waffles
// (-_-)>#
// #<(-_-)>#
// (*_*)>#