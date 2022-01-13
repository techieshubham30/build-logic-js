// A program that counts number of vowels and consonants in a String?

const countVowelsAndConsonants = str =>{
    let [totalVowels,totalCon] = [0,0];
 let strArr = str.split('');
 strArr.forEach((elem,index)=>{
   let char = elem.toLowerCase();
   if(char=='a' || char=='e' ||  char=='i' ||  char=='o' ||  char=='u'){
       totalVowels++;
   }else{
       totalCon++;
   }
 })
  return [totalVowels,totalCon];
}


console.log(...countVowelsAndConsonants("i am shubham"));
