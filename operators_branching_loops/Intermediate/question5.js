// Write a program to take an input from a user and find its Factorial

var readlineSync = require('readline-sync');

var num = readlineSync.question('Enter a number ');

console.log(`factorial of entered number is: ${fact(num)}`);

function fact(n){ // recursive approch
  if(n==0){
    return 1;
  }
  return(fact(n-1)*n);
}
