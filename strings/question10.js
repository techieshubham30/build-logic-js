// Write a program that takes two strings and copies smaller string into bigger 

const copyString = (str1,str2)=>{
    str1.length>str2.length?str1=str2:str2=str1;

    return[str1,str2];
}
console.log(copyString("I am", "Shubham Singh"));