// Write a program that removes the time from the given date string "Wed April 15, 7pm". It should return only the date without the time.

const removeTime = date =>{
 let strArr = date.split(' ');
 strArr.pop();
 return strArr.join(' ');

}

console.log(removeTime("Wed April 15, 7pm"));