// Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalen Triangle

const typeOfTriangle=(...arg)=>{
  let [a1,a2,a3] = [arg[0],arg[1],arg[2]];
  let sumOfAngles =  a1+a2+a3;
 
  let result="";
  if(sumOfAngles===180){
    
    if(a1!=a2 && a2!=a3){
        result = "Scalen";
    }else if(a1==a2 && a2==a3){
        result = "Equilateral";
    }else{
        result = "isosceles";
    }
  }else{
      result="not a triangle";
  }
  return result;
}

console.log(typeOfTriangle(30,60,90));