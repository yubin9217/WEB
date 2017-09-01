var http=require("http");
var userP=require("./nodeFunModule.js");
http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    if(request.url!=="/favicon.ico"){
        console.log("浏览器请求访问!");
        var test=new userP("yu","bin");
        test.userAction();
        response.write("模块函数执行成功!");
        response.end();
    }
}).listen(8000);
console.log("server running at http://127.0.0.1/8000!")