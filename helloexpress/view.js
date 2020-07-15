var express=require("express");
var path=require("path");
var app=express();
//Tells Express that your views will be in a folder called views
app.set("views",path.resolve(__dirname,"views"));
//tell express use EJS template
app.set("view engine","ejs");
//after chapter