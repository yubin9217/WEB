var http=require("http");
var test=require("./nodeCallFun.js");
http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    if(request.url!=="/favicon.ico"){
        console.log("浏览器请求访问!");
        test["funa"](response);
        test["funb"](response);
        response.end();
    }
}).listen(8000);
console.log("server running at http://127.0.0.1");