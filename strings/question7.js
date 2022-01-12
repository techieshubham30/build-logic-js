// A program that reads three strings and prints the longest and smallest one



const longestAndSmallestString=(...strsArr)=>{
     let maxLen=-1;
     let minLen=Number.MAX_SAFE_INTEGER;
     let [maxLenStr,minLenStr] = ["",""];
    strsArr.forEach((str,index)=>{
            if(str.length>maxLen){
                maxLenStr=str;
                maxLen = str.length;
            }
            if(str.length<minLen){
                minLenStr=str;
                minLen = str.length;
            }
    })
    

  return [maxLenStr, minLenStr]
}


console.log(longestAndSmallestString("shubham","Singh","Raj"));
