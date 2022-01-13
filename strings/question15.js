// Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case


const changeToCapitalCase = str =>{
let count=0;
  let strArr = str.split('');
  strArr.forEach((ele,index)=>{
     if(strArr[index]!==' ' && count<6){
         strArr[index] = strArr[index].toUpperCase();
         count++;
     }
  })
  return strArr.join('');
}

console.log(changeToCapitalCase("tic tac toe is a fun game"));



