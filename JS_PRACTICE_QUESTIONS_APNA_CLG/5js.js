// QUESTION - create a function using the "function" keyword that takes a string as an argument and returns the number of vowels in the string.
//create a arrow function to do the same
// function countVolwels(string){
//     let count = 0;
//     for(let val of string){
//        if( val == "a" || val == "e" || val == "i" || val == "o" || val == "u"){count++}
//     }
//     return count
// }
// let word = prompt("enter a word");
// console.log(countVolwels(word));

// let countVolwels = (word) => {
//     let count = 0;
//     for(let val of word){
//         if(val == "a" || val == "e" || val == "i" || val == "o" || val == "u"){count++}
//     }
//     return count;
// }
// let word = prompt("enter a word");
// console.log(countVolwels(word));

// QUESTION - we are given array of marks of students.  filter out the students who scored 90+. [87, 93, 64, 99, 86]
// let marks = [87, 93, 64, 99, 86];
// let toppers = marks.filter((marks)=>{
//     return marks> 90
// });
// console.log(toppers.length);

// a - take a number n as input from user. create an array of number from 1 to n.
// let number = prompt("enter a number");
// let number_arr = [];
// for (let i = 1; i <= number; i++) {
//     number_arr.push(i);
// }
// console.log(number_arr);

// b - use the reduce method to calculate sum of all numbers in the array.
// let reduced_sum_arr = number_arr.reduce((a, b) => { return a + b });
// console.log(`the product of all array elements is ${reduced_sum_arr}`);


// c - use the reduce method to calculate product of all numbers in the array.
// let reduced_product_arr = number_arr.reduce((a,b)=>{return a*b});
// console.log(`the product of all array elements is ${reduced_product_arr}`);


