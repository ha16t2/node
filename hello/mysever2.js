var http=require("http");
function requestHandler(req,res){
    if(req.url==="/"){
        res.end("welcome to the home page");
    }
    if(req.url==="/about"){
        res.end("welcome to the about page");
    }else{
        res.end("Error");
    }
}
var server=http.createServer(requestHandler);
server.listen(3000);