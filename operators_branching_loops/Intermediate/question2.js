// Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *


let row=1;
let str="";

while(row<=5){
    let col=1;
    while(col<=row){
        str+="* "
        col++;
    }
    str+="\n";
    row++;

}
console.log(str);