/*let arr=[10,20,7,4,3,5,30];
var n=30;
for(let num of arr){
    for(let i=1;i<=n;i++){
        if(n%num==0){
            console.log(num);
        }
    }

}
let arr=[109,2,4,7,6,21];
let fact=1;
for(let num of arr){
    if(num%2==0){
        if(num<0){
            console.log("Factorial of Negative is Not Possible");
        }
        else{
            fact=1;
            for(i=1;i<=num;i++){
                fact*=i;
            }
        }
        console.log(fact);
    }
}*/
let arr=[3,6,2,28];

for(let num of arr){
    sum=0;
    for(let i=1;i<num;i++){
        if(num%i==0){
            sum+=i;
        }
    }
    if(sum==num){
        console.log(sum);
    }
}

