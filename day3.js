const num1=Math.random()
if(num1>0.7){
    alert("The number is greater tan 0.7");
}

const arr=[1,2,3,4,5,6,7,8,9];

for (let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

let j=0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}

let k=0;
for (let k=arr.length-1;k>=0;k--){
    console.log(arr[k]);
}

const num2=Math.random();

if((num1>0.7 && num2>0.7) || (num1<=0.2 || num2<=0.2)){
    alert("Both the numbers are greater than 0.7 or one of the number is not greater than 0.2");
}

//Hoisting : Javscript by default moves var varibales and functions to th top. Var variables contains a value of undefinedgit .
console.log(username);
let username="Chandra";