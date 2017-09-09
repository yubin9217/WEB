var stream=require("stream");
var util=require("util");

util.inherits(myFirstWritableFun,stream.Writable);

function myFirstWritableFun(opt){
	stream.Writable.call(this,opt);
	this.array=new Array();
}

myFirstWritableFun.prototype._write = function(data,encoding,callback) {
	this.array.push(data.toString("utf-8"));
	console.log("写入数据");
	callback();
};

var testWritableFun=new myFirstWritableFun();

testWritableFun.write("Item0","utf-8");
testWritableFun.end("lastItem");
console.log(testWritableFun.array);