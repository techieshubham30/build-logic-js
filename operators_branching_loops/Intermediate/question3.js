// Write a program to take a number input from user and print multiplication table 12 times for that number.


const printTable=(n)=>{
  for(let i=1;i<=12;i++){
    console.log(`${n} * ${i} = ${n*i}\n`);
  }
}

printTable(10);
