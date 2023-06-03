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

function digits(str){
    let arr = toArr(str);
    if(arr == false) return "Некорректный ввод";
    else if(arr.length < 1) return "Неверное количество";

    const set = new Set(arr);

    return set.size;
}

export default digits;