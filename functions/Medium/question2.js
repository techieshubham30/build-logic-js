// Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2


const indexOf=(...arg)=>{
    let result="not present in array";
    arg[0].forEach((elem,index)=>{
      if(elem===arg[1]){
          result = index;
        
      }
    })

    return result;

}

console.log(indexOf([1,6,3,5,8,9],11));