//Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8


const power = (a,b) =>{
    let result=1;
    while(b--){
        result*=a;
    }
    return result;

}

console.log(power(3,2));