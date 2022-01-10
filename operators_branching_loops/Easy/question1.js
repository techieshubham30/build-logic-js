// Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

const addFiveNumbers=(...arg)=>{
    let sum=0;
    for(let elem of arg){
        sum+=elem;
    }
    return sum;
}

console.log(addFiveNumbers(5,13,7,21,48));