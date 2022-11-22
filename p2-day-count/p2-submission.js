let year = 2001;
let month = 2;

let days=0;
//Write your switch case logic here to compute days in month

if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
    console.log(days=31);
}
else if(month==4|| month==6|| month==9|| month==11){
    console.log(days=30);
}
else if(month=2 && year%4==0){
    console.log(days=29);
}
else
console.log(days=28);


