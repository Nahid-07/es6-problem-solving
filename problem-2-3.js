/* 
2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method.
*/

// problem has been solved using .filter() method
const array = [33, 50, 79, 78, 90, 101, 30 ];
const filtering = array.filter(devided => devided % 10 === 0);
console.log(filtering)

/*
Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3. 
*/

const array1 = [33, 50, 79, 78, 90, 101, 30 ];
const arrayElement = array1.find(number => number % 10 === 0);
console.log(arrayElement);

// to comparing this 2 problems output i noticed that filter method gives numbers of array which elements are devisible by 10, and find method gives only the first element which is devisible by 10. others elements did not come out to the array as an array. thats mean find method will give us only the first match element as given condition.