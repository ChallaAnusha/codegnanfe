console.log("Function Declaration");
function reverse(n){
    res=0;
    while(n!=0){
        r=n%10;
        res=(res*10)+r;
        n=parseInt(n/10);
    }
    return res;
}
var x=-123;
if(x>=0){
    x=reverse(123);
    console.log(x);
}
else{
    x=x*-1;
    z=reverse(x);
    console.log(-1*z);
}
console.log("Function Expression");
var reverse=function (n){
    res=0;
    while(n!=0){
        r=n%10;
        res=(res*10)+r;
        n=parseInt(n/10);
    }
    return res;
}
var x=1234;
if(x>=0){
    x=reverse(1234);
    console.log(x);
}
else{
    x=x*-1;
    z=reverse(x);
    console.log(-1*z);
}
console.log("Example");
var reverse=function (n){
    res=0;
    while(n!=0){
        r=n%10;
        res=(res*10)+r;
        n=parseInt(n/10);
    }
    return res;
}
var x=123;
var y=3;
var res=(x*10)+3;
//console.log(res);
res=reverse(res);
res=(res*10)+3;
res=reverse(res);
console.log(res);
console.log("Arrow Functions");
var result=(n,s)=>{
    console.log(n%s);
}
result(14,4);
console.log("IIFE");
(function(){
    var n=7;
    var res=1;
    for(i=1;i<=n;i++){
        res=res*i;
    }
    console.log(res);
})();
console.log("Named Function");
function checknum(n){
    if(n%2==0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
checknum(13);
var hello=function checksum(n){
    if(n%2==0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
hello(12);
console.log("WPWR");
function wpwr(a,b,c){
    return a+b+c;
}
console.log(wpwr(10,12,30));
console.log("WPWOR");
function wpwor(a,b,c){
    console.log(a+b+c);
}
console.log(wpwor(10,12,30));
