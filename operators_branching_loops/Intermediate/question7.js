// Write a program to take a day as an input and determine whether it is a weekday or weekend. 

var readlineSync = require('readline-sync');

var day = readlineSync.question('Enter a day ');

console.log(`entered day is ${weekOrweekEnd(day)}`);

function weekOrweekEnd(day){
  if(day==="Saturday" || day==="Sunday"){
    return "weekend";
  }else{
    return "a weekday";
  }

  return;
}