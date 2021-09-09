// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

var modifiedArray=fizzbuzz();

for(var i=0;i<modifiedArray.length;i++){
    console.log(`${modifiedArray[i]}\n`);
}

function fizzbuzz(){
  let array=[];
for(let i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        array[i-1]="FizzBuzz";
    }else if(i%3==0){
        array[i-1]="Fizz";

    }else if(i%5==0){
        array[i-1]="Buzz";
    }else{
        array[i-1]=i;
    }
}

return array;

}



