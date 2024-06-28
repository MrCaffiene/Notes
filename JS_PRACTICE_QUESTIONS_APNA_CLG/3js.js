
// QUESTION - print all even numbers from 0 to 100
// function even(){
//     for(let i=0; i<=100; i++){
//         if(i%2 === 0){ 
//             console.log(i);
//         }
//     }
// }
// even();
// console.log("hi");

// QUESTION - Create a game where you start with any random number. ask the user to keep guessing the number until the user enters the correct value.
// function game(){
// let theNumber = Math.floor(Math.random() * 100);
// let guess = prompt("guess the number");
// while(theNumber != guess){
//     if(theNumber > guess){
//         guess = prompt("the number "+ theNumber +" is higher ");
//     }
//     else{
//         guess = prompt("the number" +theNumber+" is lower");
//     }
// }   
// alert("congrats you guessed the number " +theNumber+"  right");
// }

// game();


// QUESTION - prompt the user to enter their full name. Generate a username for them based on the input. start the username with @, followed by their fullname and ending with the fullname length. eg : user name = "ankitdhotre",username = "@ankitdhotre11"
// let fullname = prompt("enter your fullname");
// function username(fullname){
//     let result = "@"+(fullname.toLowerCase()).trim() + fullname.length;
//     return result
// }
// console.log(username(fullname));
