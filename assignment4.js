const arr=[1,12,3,41,15];
const fltrArr=arr.filter(val => val>5);
const mapArr=arr.map(val => ({num: val}));
const redResult=arr.reduce((prev,curr) => {
 return prev+curr;
},0);

console.log(arr);
console.log(fltrArr);
console.log(mapArr);
console.log(redResult);

function findMaxAndMin(...args){
    return [Math.max(...args),Math.min(...args)];
}
const [maxval,minval]=[...findMaxAndMin(...arr)];
console.log(maxval,minval);

const list=[1,2,2,3,4,5,33,33,2,3,4,5];
const arrSet=new Set(list);
console.log(arrSet);

