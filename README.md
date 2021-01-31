# hw-11-note-taker

## Description

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.


<br>

## Initial Installation
Copy the repo with complted code and information. Once on your local machine use the following command in your terminal:

```
npm install 
```
- with no paramerters will just be sure you pull down dependancies listed in the json file
- only run if there are existing dependancies in the json file

All dependanies are listed within the package.json file so they will install automatically. If you run into any missed dependancies or want to add some of your own custom code use the following command: 
```
npm install (package name)
```
- run for other dependancies
- Just add in each package with the name of the package


<br>

## Install Nodemon
```
npm i -D nodemon
```
After installing you will need to check your package.json file and make sure the following code is in place: 
```
Add/Edit scripts in package.json
   "start": "node index",
    "dev": "nodemon index"
```

>This will allow the server to restart after each change/save automatically rather than having to stop and restart your server during development.> 

>The "start" script is for when the application is live on a server. 
>The "dev" script is for local use only. 
 


<br>

## Acceptance Walkthrough

- Application should allow users to create and save notes.

- Application should allow users to view previously saved notes.

- Application should allow users to delete previously saved notes.

<br>


## Deployed URL & Code


>[Herkou Application](https://guarded-harbor-89636.herokuapp.com/notes)

>[GitHub Repo](https://github.com/ashhunt07/hw-11-note-taker)


<br><br>


#### Contributor
##### Ashley Hunt
##### * [GitHub](https://github.com/ashhunt07)
##### * [Contact](https://ashhunt07.github.io/portfolio/contact.html)
