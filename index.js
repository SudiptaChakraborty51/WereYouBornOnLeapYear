var readlineSync = require("readline-sync");
var chalk = require("chalk");

var userName = readlineSync.question("What is your name? : ");

console.log("");
console.log(chalk.blue.bold("Welcome "+userName));
console.log(chalk.cyan.bold("We tell you if you were born on a leap year, check it!"));
console.log("");

var dob = readlineSync.question("Enter your date of birth : (dd-mm-yyyy) ");

year = parseInt(dob.slice(-4));

console.log("");
console.log("..........................................");

function checkLeapYear(year){
  if((year%4==0) && (year%100!=0) || (year%400==0)){
  console.log(chalk.green.bold("Yes! You were born on Leap Year"));
} else{
  console.log(chalk.red("Oh no! You weren't born on Leap Year"));
}
}

if(dob.length!=10){
  console.log("Enter valid date of birth!");
}else {
  checkLeapYear(year);
}