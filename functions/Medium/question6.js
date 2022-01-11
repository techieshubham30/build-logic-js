// Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

const minDate=(date1,date2)=>{
    let result="";
    let date1Str = date1.split('/');
    let date2Str = date2.split('/');
    let d1=dateMonthYear(date1Str);
    let d2=dateMonthYear(date2Str);
    
    if(d1[2]===d2[2]){
       if(d1[1]===d2[1]){
           if(d1[0]===d1[0]){
              result `Both dates are same`;
           }else if(d1[0]<d2[0]){
               result ==date1;
           }else{
               result = date2;
           }
       }else if(d1[1]<d2[1]){
           result = date1;
       }else{
           result = date2;
       }
    }else if(d1[2]<d2[2]){
        result = date1;
    }else{
        result = date2;
    }

    return result;

}

const dateMonthYear=(date)=>{
 let [dateDay,dateMonth,dateYear] = [Number(date[0]),Number(date[1]),Number(date[2])]
 return [dateDay,dateMonth,dateYear];
}

console.log(minDate('02/05/2021', '24/06/2021'));