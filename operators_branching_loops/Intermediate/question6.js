// Write a Program to take a number input from user and find if the number is Prime or not.

var readlineSync = require('readline-sync');

var num = readlineSync.question('Enter a number ');

console.log(`entered number is ${primeNo(num)}`);

function primeNo(n){
  var check=1;
  if(n==2){
    return "a prime number";
  }else{
    for(var i=2;i<n;i++){
      if(n%i==0){
        check=0; 
        break;
      }
    }
  }
  if(check==1){
    return "a prime number";
  }else{
   return "not a prime number";
  }
  return;
}
