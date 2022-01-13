// Write a program that masks all but last four characters of the string "5565534276455423" to '#'

const mask = str =>{
 let strArr = str.split('');
 let strArrLastIndex = strArr.length-1;
 let temp =4;
 while(temp--){
     strArr[strArrLastIndex--] = "#";
 }
 return strArr.join('');
}

console.log(mask("5565534276455423"));