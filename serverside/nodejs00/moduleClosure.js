function nextTickFun(data,callback){
    process.nextTick(function(){
        callback(data);
    });
}
function test(array,a){
    for(var i=0;i<3;i++){
        console.log("同步方法执行完毕!");
            nextTickFun(i,function(){
                console.log(i+"异步方法执行完闭!");
            });
        // (function (n) {
        //     process.nextTick(function(){
        //         console.log(n);
        //         console.log("异步方法执行完闭!");
        //     });
        // })(i);
    }
}
module.exports=test;