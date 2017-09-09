var util=require("util");
var stream=require("stream");

util.inherits(myFirstReadableFun,stream.Readable);

function myFirstReadableFun(opt){
	stream.Readable.call(this,opt);
	this._index=0;
	this.array=["iteam0","iteam1","iteam2","iteam3"];
}

myFirstReadableFun.prototype._read = function() {
	if(this._index>=this.array.length){
		console.log("数据已经取完了!");
		this.push(null);
	}else{
		console.log("还有数据可以取");
		this.push(this.array[this._index++]);
	}
};

var testReadableFun=new myFirstReadableFun();

//直接读取
//for(var i in testReadableFun.array){
//	console.log("Direct read:"+" "+testReadableFun.read().toString());
//}

// testReadableFun.on("data",function(data){
// 	console.log("Callback read:"+" "+data.toString());
// });

testReadableFun.on("readable",function(data){
	console.log(testReadableFun.read());
});
testReadableFun.on('end',function(){
	console.log("No more iteams!");
});