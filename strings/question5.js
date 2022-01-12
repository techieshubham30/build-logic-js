// Write a program to delete all vowels from a string. Assume string is not more than 80 characters long

const delAllVowels=(str)=>{
 let strArr= str.split('');
 strArr.forEach((elem,index)=>{
    let char = elem.toLowerCase();
    if(char=='a' || char=='e',char=='i',char=='o',char=='u'){
        strArr[index]='';
    }
 })
 return strArr.join('');

}

console.log(delAllVowels("shubham singh"));