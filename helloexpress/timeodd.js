var express=require("express");
var http=require("http");
var app=express();
//log on middleware
app.use(function(request,response,next){
   console.log("method:"+request.method+" to:"+request.url);
   next();

});
//call the next to continue on
app.use(function(request,response,next){
    var minute=(new Date()).getMinutes();
    if(minute%2===0){
        response.end("odd");
        next();
    }else{
        //If not authorized, sends a 403 status code and responds
        response.statusCode=403;
        response.end("Not authorized");
    }
});
app.use(function(request, response) {
    response.end('Secret info: the password is "swordfish"!');
});
http.createServer(app).listen(3000);