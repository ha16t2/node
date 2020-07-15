var express=require("express");
var http=require("http");
var logger=require("morgan");

var app=express();
app.use(logger("short"));//return a function
app.use(function(request,response){
    response.writeHead(200,{"Content-type":"text/plain"});
    response.end("Hello");
});
http.createServer(app).listen(3000);
