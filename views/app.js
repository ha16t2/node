// //require all module you need
// var http=require("http");
// var path=require("path");
// var express=require("express");
// var logger=require("morgan");
// var bodyParser = require("body-parser");
// const { response } = require("express");
// //make an express app
// var app=express();
// app.set("view",path.resolve(__dirname,"views"));//in views folder
// app.set("view engine","ejs");//use ESJ engine

// var entries=[];//create a global array to store all entries
// app.locals.entries=entries;//make this entries array available in all views
// //use morgan to log very request
// app.use(logger("dev"));
// //Populates a variable called req.body if the user is submitting a form. (The extended option is required.)
// app.use(bodyParser.urlencoded({extended:false}));
// //when visiting the site root render homepage views/index.ejs
// app.get("/",function(request,reponse){
//     response.render("index");
// });
// //Renders the “new entry” page (at views/index.ejs) when GETting the URL
// app.get("/new-entry", function(request, response) {
//     response.render("new-entry");
// });
// //Defines a route handler when you POST to the “newentry” URL in contrast to a GET
// app.post("/new-entry",function(request,response){
//     if(!request.body.title||!request.body.body){
//         response.status(400).send("entries must have title and body");
//         return;
//     }
//     //add a new entry to the list entries
//     entries.push({
//         title:request.body.title,
//         content:request.body.body,
//         published:new Date()

//     });
//     response.redirect("/");//chuyen toi hompage to see entry
// });

// //render 404 because request is unknown source
// app.use(function(request,response){
//     response.status(404).render("404");
// });
// http.createServer(app).listen(3000,function(){
//     console.log("Guestbook app started to port 3000.")
// })
var http = require("http");
var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
var entries = [];
app.locals.entries = entries;
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", function (request, response) {
    response.render("index");
});
app.get("/new-entry", function (request, response) {
    response.render("new-entry");
});
app.post("/new-entry", function (request, response) {
    if (!request.body.title || !request.body.body) {
        response.status(400).send("Entries must have a title and a body.");
        return;
    }
    entries.push({
        title: request.body.title,
        content: request.body.body,
        published: new Date()
    });
    response.redirect("/");
});
app.use(function (request, response) {
    response.status(404).render("404");
});
http.createServer(app).listen(3000, function () {
    console.log("Guestbook app started on port 3000.");
});

