// Given an input string S that contains multiple words, you need to remove all the spaces present in the input string. There can be multiple spaces present after any word


const removeSpaces = str =>{
  let strArr = str.split('');
  let newStr='';
  strArr.forEach((char,index)=>{
      if(char!==' '){
          newStr+=char;
      }
  })
  return newStr;
}

console.log(removeSpaces("I   am  Shubham Singh"));