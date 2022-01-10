// Write a Program to take a number input from user and find if the number is Prime or not.


const isPrime=(n)=>{
  let check=1;
  for(let i=2;i<n;i++){
    if(n%i==0){
          check=0;
    }
  }
  return check===1?"Prime":"Not Prime";
}

console.log(isPrime(7));