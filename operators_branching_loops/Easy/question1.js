// Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

let arrOfNumbers=[5,13,7,21,48];

console.log(`Sum of numbers are: ${sumOfNumbers(arrOfNumbers)}`);

function sumOfNumbers(arr){
    let sum=0;

    for(let i=0;i<arr.length;i++){

        sum+=arr[i];
    }

    return(sum);

}