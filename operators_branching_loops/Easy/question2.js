// Write a program to take a number input from user and determine whether the number is odd or even.

var readlineSync = require('readline-sync');
var num = Number(readlineSync.question('Enter a number '));

console.log(`Entered number is ${checkNumber(num)}`);


function checkNumber(n){
  if(n%2==0){
    return "even";
  }else{
    return "odd";
  }
  return;
}