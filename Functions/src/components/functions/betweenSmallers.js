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


  function betweenSmallers(str) {

    const arr = toArr(str);
    if(arr === false) return "Некорректный ввод";
    else if(arr.length < 3) return "Недостаточно чисел";

    let ans = 0;

    for(let i = 1; i < arr.length-1; i++){
        if((arr[i] > arr[i-1]) && (arr[i] > arr[i+1])) ans++; 
    }
    return [ans, arr];

  }

  export default betweenSmallers;