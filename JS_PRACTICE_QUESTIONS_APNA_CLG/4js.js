//question - for a given array with marks of students -> [85,97,44,37,76,60] find the average marks of the entire class
// let student_marks = [85,97,44,37,76,60];
// let sum = 0;
// for(let val of student_marks){
//     sum += val;
// }
// let average_marks = sum/student_marks.length;
// document.getElementById("div").innerHTML = `the average marks of the class is ${average_marks}`;

//question - for a given array with prices of five items -> [250, 645, 300, 900, 50] all items have an offer of 10% off on them. change the array to store final price after applying the offer.

// let prices = [250, 645, 300, 900, 50];
// let new_prices = [];
// for(let key in prices){
//     new_prices[key] = prices[key] - prices[key]*10/100; 
// }
// document.getElementById("div").innerHTML = `${new_prices}`;

//QUESTION - create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// a - remove the first company from the array 
// b - remove Uber and Add Ola in it's place 
// c - Add Amazone at the end
// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log(companies);
// //remove 1st company 
// companies.shift();
// console.log(companies);
// //remove Uber and Add Ola in it's place 
// companies.splice(1,1,"Ola");console.log(companies);
// //Add Amazone at the end
// companies.push("Amazone");console.log(companies);