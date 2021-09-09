// Write a program to take a number input from user and print multiplication table 12 times for that number.

var readlineSync = require('readline-sync');

var num = readlineSync.question('Enter a number ');

tableGenerator(num);

function tableGenerator(n){
  for(var i=1;i<=12;i++){
  console.log(n*i);
  }
}

