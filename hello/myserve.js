var http=require("http");//require http module gan cho bien
function requestHandler(request,response){
 console.log("In comes a request to:"+request.url);
 response.end("Hello,world!");
}
var server=http.createServer(requestHandler);
server.listen(3000);