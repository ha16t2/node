var express=require("express");
var path=require("path");
var http=require("http");
var app=express();
var publicPath=path.resolve(__dirname,"public");
app.use(express.static(publicPath));
app.get("/",function(request,response){
    response.end("Homepage!");
});
app.get("/about",function(request,response){
    response.end("Aboutpage")
});
app.get("/weather",function(request,response){
    response.redirect("http://expressjs.com");
    response.end("Weatherpage")
});
app.get(function(request,response){
    response.statusCode=404;
    response.end("404!")

});
//req.params has a property called who.
//http://localhost:3000/hello/Ha
app.get("/hello/:who", function(request, response) {
    response.end("Hello, " + request.params.who + ".");
    // Fun fact: this has some security issues, which we’ll get to!
   });
http.createServer(app).listen(3000);