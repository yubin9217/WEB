var testClosure=require("./nodeModuleClosure.js");
var array=[];
function a(i){
    console.log(i+"异步方法执行完闭!");
}
testClosure(array,a);
console.log("主程序执行完毕");