function calculate(arg){
let userInput=parseInt(document.getElementById("userInput").value);
let result;
result=18 + userInput;
let choice=parseInt(document.getElementById("choice").value);
result=result-choice;
result=result*choice;
result=result/choice;
arg.disabled=true;
alert(result);
alert(userInput);
}