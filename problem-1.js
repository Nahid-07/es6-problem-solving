/*
 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.
 */
const oddArray = [ 1, 3, 5, 7, 9 ];

// solv with for loop
let evenArray = [];
for( let array of oddArray){
    // finding index of array element and increase by 1
    array++;
    // while increases by 1 it comes down and push the value into the empty delared array
    evenArray.push(array);
}
// console.log(evenArray)

// solve with map

const multiply = oddArray.map(number => number +1);
console.log(multiply);
