function test(array,callback){
    for(var i=0;i<3;i++){
        console.log("同步方法执行完毕!");
            process.nextTick(function(){
                callback(i);
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