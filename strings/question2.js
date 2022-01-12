// Write a program that reads two strings and append first string to the second. So if first string is Good second string is Morning , the program should print MorningGood

const append=(...str)=>str[1]+str[0]

console.log(append("Good","Morning"));