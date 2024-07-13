console.log("Looping Statements");
//for loop
for(var i=0;i<=5;i++){
    console.log(i);
}
//for in
var contact={
    name:"Anu",
    mobile:989,
    email:"anu@gmail.com"
}
for(var key in contact){
    console.log(key+":"+contact[key]);
}
// for of
var lst=["ab","bc","cd","de"]
for(var x of lst){
    console.log(x);
}