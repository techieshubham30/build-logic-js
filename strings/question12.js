// For a given input string(str), write a function to print all the possible substrings.Without using substr method

const allPosibleSubstrings = str =>{
    let substrings=[];
  let strArr = str.split('');
  for(let i = 0;i<strArr.length;i++){
      for(let j=i;j<strArr.length;j++){
          let newStr='';
          for(let k=i;k<=j;k++){
              newStr+=strArr[k];
          }
          substrings.push(newStr);
            
      }
  }
  return substrings;
}

console.log(allPosibleSubstrings("abc"));