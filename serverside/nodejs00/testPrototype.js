function testPrototype(){
   var firstName;
   var lastName;
   //this.firstName;
    //this.lastName;
}
/*
* 将testProtype当作对象
* */
testPrototype.prototype.getFullName=function(){
    return (this.firstName+this.lastName);
};
var test0=new testPrototype();
// var test0=testProtype; //将其作为普通方法
// test0.firstName="yu";
// test0.lastName="bin";
// console.log("%s%s",test0.firstName,test0.lastName);

test0.firstName="yu";
test0.lastName="bin";

console.log(test0.getFullName());