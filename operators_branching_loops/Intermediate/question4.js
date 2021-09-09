// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....


var readlineSync = require('readline-sync');

var num = readlineSync.question('Enter a number ');

var x=fibonacciSeries(num);
for(var i=0;i<x.length;i++){
  console.log(x[i]);
}
function fibonacciSeries(n){
  var firstNo=0;
  var secondNo=1;
  var fibonacciArray=[];
  fibonacciArray[0]=firstNo;
  fibonacciArray[1]=secondNo;

  for(var i=2;i<n;i++){
    fibonacciArray[i]=firstNo+secondNo;
    firstNo=secondNo;
    secondNo=fibonacciArray[i];

  }
  return fibonacciArray;

  }


