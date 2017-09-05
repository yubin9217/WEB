var testClosure=require("./moduleClosure.js");
var array=[];
function a(j){
	console.log(j+"异步方法执行完闭!");   
}
testClosure(array,a);
console.log("主程序执行完毕");