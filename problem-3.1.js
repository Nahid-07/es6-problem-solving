/* 
1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.
*/

const myArray = [ 1, 9, 17, 22 ];
const sumOfArray = myArray.reduce((previousNumber , currentNumber)=>{
    return previousNumber+currentNumber
});
// console.log(sumOfArray)

let sum= 0;
for(let items of myArray){
    sum += items
}
console.log(sum)
