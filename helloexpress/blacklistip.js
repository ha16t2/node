var express=require("express");
var path=require("path");
var http=require("http");
var app=express();
var EVIL_IP = "123.45.67.89";
app.use(function(request, response, next) {
 if (request.ip === EVIL_IP) {
 response.status(401).send("Not allowed!");
 } else {
 next();
 }
});
http.createServer(app).listen(3000);