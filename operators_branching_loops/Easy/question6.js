// Write program to take a month as an input from the user and find out whether the month has 31 days or not.



const months ={
  January:31,
  February:28,
  March:31,
  April:30,
  May:31,
  June:30,
  July:31,
  August:31,
  September:30,
  October:31,
  November:30,
  December:31
}

const has31DaysOrNot=(month)=>(months[month]==31?"Yes":"No")

console.log(has31DaysOrNot("April"));