function userP(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
    this.userAction=function () {
        console.log(this.firstName+this.lastName+"学习node.js");
    }
}
module.exports=userP;
