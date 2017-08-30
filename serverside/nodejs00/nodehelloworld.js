var http=require("http");
var userP=require("./nodeFunModule.js");
http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    if(request.url!=="/favicon.ico"){
        console.log("浏览器请求访问");
        response.write("HelloWorld");
        var testuserP=new userP();
        testuserP.firstName="yu";
        testuserP.lastName="bin";
        testuserP.userAction();
        response.end()
    }
}).listen(8000);
console.log("Server running at http://127.0.0.1/");
