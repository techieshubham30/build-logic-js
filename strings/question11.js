// Given a string, determine if it is a palindrome, considering only alphanumeric characters

const isPalindrome = str =>{
  let reverseStr = str.split('').reverse().join('');
  return reverseStr===str?true:false;
}

console.log(isPalindrome("mom"));