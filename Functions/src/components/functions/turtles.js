"use strict"

function toArr(str) {
    const arrOfstr = str.split(" ");
    let arr = [];
    for(let i = 1; i < arrOfstr.length; i+=2){
        if(isNaN(arrOfstr[i]) || isNaN(arrOfstr[i-1])) return false;
        else {
            arr.push([+arrOfstr[i-1], +arrOfstr[i]]);
        }
    }
    return arr;
}

function turtles(str){
    const arr = toArr(str);
    if(arr == false) return "Некорректный ввод";
    else if(arr.length < 1) return "Неверное количество";

    const sums = [];
    let max = 1;
    let m = 1;

    for(let i = 0; i <arr.length; i++) {
        sums.push(arr[i][0]+arr[i][1]);
    }
    
    sums.sort((a, b) => a-b);

    for(let i = 0; i < sums.length; i++) {
        if(sums[i] === sums[i+1]) {
            m++;
            console.log([m, sums[i], sums[i+1]])
        } else {
           if(m > max) max = m;
            m = 1;
        } }
    return max;
}

export default turtles;