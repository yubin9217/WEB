var http=require("http");
var anotheruserP=require("./nodeFunModuleExtend.js");
http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    if(request.url!=="/favicon.ico"){
        console.log("浏览器访问!");
        var testanotheruserP=new anotheruserP("yu","bin");
        testanotheruserP.anotheruserAction();
        testanotheruserP.userAction();
        response.write("继承函数执行成功!");
        response.end();
    }
}).listen(8000);
console.log("server running at http://127.0.0.1/8000");