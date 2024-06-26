let rest=(...a)=>{
    let ans=0;
    for(let i of a){
        ans+=i;

    }
    return ans;
};
console.log(rest(1,2,3,4,5));

function sayHello(name){
    console.log("Hi "+name);
}


sayHello("Geek");

// Rewritting sayHello function as an arrow function


let greet=(name)=>{
    console.log("Hi "+name);
};

greet("Geek");

//Rewritting above with one argument

let sayHello2=name=>{
    console.log(name);
};

sayHello2("Geek");

//Rewritting above with two arguments

let wish=(greet,name)=>{
    console.log(name);
};

wish("HI","Geek")

//Rewritting above with no arguments 

let cal=()=>{
    console.log("Hi Geek");
};

cal();

//Rewritting above with a return value instead of outputing the text 

let calReturn=(name)=> "HI "+name;

calReturn("Geek");

//Rewritting above with default phrase when no value is provided 

let shout=(name,phrase="Hi")=>{
    console.log(phrase+" "+name);
};
shout("Geek","Hello");

let checkInput=(cb,...inp)=>{
    isEmpty=false;
    for(let i of inp){
    if(!i){
        isEmpty=true;
        break;
    }
}
    if(!isEmpty){
        cb();
    }
};
function cb(){
    console.log("The strings are empty.");
}


checkInput(cb,"hi");