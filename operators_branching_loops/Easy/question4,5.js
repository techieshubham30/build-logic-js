// Write a program to find the maximum out of three  numbers.

var readlineSync = require('readline-sync');
var arrayOfNumber=[];
var lengthOfArray=Number(readlineSync.question('Total numbers: '));

console.log("Enter numbers\n");

for(let i=0;i<lengthOfArray;i++){
  arrayOfNumber[i]=Number(readlineSync.question());
}

var x=findMaxAndMinNUmber(arrayOfNumber);

console.log(`maximum number is: ${x[0]} and minimum number is: ${x[1]}`);

function findMaxAndMinNUmber(arr){
 var max=-1;
 var min=Number.MAX_SAFE_INTEGER;
 for(var i=0;i<arr.length;i++){
   if(arr[i]>max){
     max=arr[i];
   }
    if(arr[i]<min){
     min=arr[i];
   }
 }

 return [max,min];
}