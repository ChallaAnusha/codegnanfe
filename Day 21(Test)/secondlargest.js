var a=10;
var b=20;
var c=30;
if(a>b && a>c){
    a=0;
}
else if(b>a && b>c){
    b=0;
}
else{
    c=0;
}
if(a>b && a>c){
    console.log(a);
}
else if(b>a && b>c){
    console.log(b);
}
else{
    console.log(c);
}