// Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using strlen()

const checkStringLength = (str)=>{
    let strLen=0;
    str.split('').forEach((ele)=>{
      strLen++;
 });
 return strLen>7?true:false;
}

console.log(checkStringLength("i am singh ") );