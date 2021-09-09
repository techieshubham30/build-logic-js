
// Write a program to find the maximum and minimum out of two given numbers. 

var readlineSync = require('readline-sync');
var num1 = Number(readlineSync.question('Enter first number '));

var num2 = Number(readlineSync.question('Enter second number '));

var arrOfAns=checkNumber(num1,num2);

console.log(`maximum number is: ${arrOfAns[0]} and minimum number is: ${arrOfAns[1]}`);


function checkNumber(n1,n2){
  if(n1>n2){
    return [n1,n2];
  }else{
    return [n2,n1];
  }
}