"use strict"

function toArr(str) {
    const arrOfstr = str.split(" ");
    let arr = [];
    for(let i = 0; i < arrOfstr.length; i++){
        if(isNaN(arrOfstr[i])) return false;
        else {
            arr.push(+arrOfstr[i]);
        }
    }
    return arr;
}


  function findAPlace(str) {
    const arr = toArr(str);
    console.log("arr: " + arr);
    if(arr === false) return "Некорректный ввод";
    else if(arr.length < 3) return "Неверное количество";

    let ans = 0;
    let max = 0;
    let indexMax = null;
    let place = arr.length;

    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] > max) {
    //         max = arr[i];
    //         indexMax = i;}
    // }

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
            indexMax = i;
            ans = 0;
        } else if((arr[i] % 5 === 0) &&
         (arr[i] % 2 !== 0) && 
         (arr[i] > arr[i+1]) && 
         (indexMax < i) && 
         (arr[i] > ans)) {
            ans = arr[i];            
        }
        console.log("ans: "+ans);
    }
    
    if(ans === 0) return 0;

     const sortArr = arr.sort((a, b) => b-a);

     for(let i = 0; i < sortArr.length; i++) {
        if(sortArr[i] === ans) return ("Place - " + (i+1) + " in: " + sortArr);        
     }

    return ("Last return: " + ans);
  }

  export default findAPlace;