var express=require("express");//rrequires the express modules
var http=require("http");
var app=express();//call express fuction to start a new express app
//middleware
app.use(function(request,response){
    console.log("In comes a request to:"+request.url);
    response.end("Hello,world!");
});
http.createServer(app).listen(3000);