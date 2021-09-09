// Write program to take a month as an input from the user and find out whether the month has 31 days or not.

var readlineSync = require('readline-sync');

var daysInMonths={
  jan:31,
  feb:28,
  mar:31,
  apr:30,
  may:31,
  jun:30,
  jul:31,
  aug:31,
  sep:30,
  oct:31,
  nov:30,
  dec:31
}

var month = readlineSync.question('Enter month ');


var daysInMonth=getDaysInMonths(month);

if(daysInMonth==31){
  console.log(`yes ${month} have 31 days`);

}else{
    console.log(`No ${month} don't have 31 days`);

}


function getDaysInMonths(m){
  var x=m.substr(0,3);
  return daysInMonths[x];
}
