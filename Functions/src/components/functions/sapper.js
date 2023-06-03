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

function sapper(str){
    const arr = toArr(str);
    //console.log("arr: " + arr);
    if(arr === false) return "Некорректный ввод";
    else if(arr.length < 3) return "Неверное количество";

    

    return arr;
}

export default sapper;