// Program that reads string and count number of characters present in the string


//If sapce is not included as a character

const countCharInString=(str)=>{
    let totalChar = 0;
   Array.from(str).forEach((ele,index)=>{
       if(str[index]!=" ")
                totalChar++;
   })
   return totalChar;
}

console.log(countCharInString("shubham singh"));