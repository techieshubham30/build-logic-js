// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....



const fibonacciSeries=(n)=>{
 let [firstNum,secondNum] = [0,1];
 let fibonacciArr = [0,1];
 for(let i=2;i<n;i++){
   fibonacciArr.push(fibonacciArr[i-1]+fibonacciArr[i-2]);
    
 }
 return fibonacciArr;

}

console.log(fibonacciSeries(10));