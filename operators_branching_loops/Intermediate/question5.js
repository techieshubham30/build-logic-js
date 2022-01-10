// Write a program to take an input from a user and find its Factorial


const factorialOfNum=(n)=>{
  let fact=1;
  for(let i=n;i>=1;i--){
    fact*=i;
  }
  return fact;
}

console.log(factorialOfNum(5));
