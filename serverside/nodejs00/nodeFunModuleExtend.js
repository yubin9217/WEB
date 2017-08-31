var userP=require("./nodeFunModule.js");
function anotheruserP(firstName,lastName){
    userP.apply(this,[firstName,lastName]);
    this.anotheruserAction=function(){
        console.log(firstName+lastName+"学习nodejs");
    }
}
module.exports=anotheruserP;