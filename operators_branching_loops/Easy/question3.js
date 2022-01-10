
// Write a program to find the maximum and minimum out of two given numbers. 


const maxAndMinNum=(...arg)=>{
    let maxNum = Math.max(...arg);
    let minNum = Math.min(...arg);
    return [maxNum,minNum];
}

console.log(...maxAndMinNum(5,7));