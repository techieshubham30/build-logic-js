// Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3


const noOfWords =str=>str.replace(/[ ]{2,}/gi, " ").split(' ').length-1

console.log(noOfWords("We        are neoGrammers     "));