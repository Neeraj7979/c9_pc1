// Write your fibonacci series solution code here
let a=0;
let b=1;
let sum=a+b;
console.log(a,b);

for(let i=2;i<10;++i){ 
    console.log(sum);
    a=b;
    b=sum;
    sum=a+b;
}