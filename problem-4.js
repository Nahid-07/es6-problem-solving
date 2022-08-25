/* 
Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.
*/
// problem solved with for loop
const people = [
    {name : 'meena', age : 20},
    {name : 'Rina', age : 15},
    {name : 'Shuchorita', age : 22}
];
let sum = 0;
for(let element of people){
    const ages = element.age
    sum += ages;
}
console.log(sum)