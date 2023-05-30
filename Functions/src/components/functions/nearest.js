"use strict"

function toArr(str) {
    const arr = str.split(" ");
    for(let i = 0; i < arr.length; i++) {
        if(typeof +arr[i] !== "number") return false;
    }
    return arr;
}



function nearest(str) {
    const arr = toArr(str);
    if(arr === false) return "Некорректный ввод";
    if(arr.length < 2) return "Некорректный ввод";
    const num = arr.pop();

    let def = Infinity;
    let ans = "";

    for(let i = 0; i < arr.length; i++) {
        if((((arr[i]-num) < 0) ? (-(arr[i]-num)) : (arr[i]-num)) < def) {
            def = ((arr[i]-num) < 0) ? (-(arr[i]-num)) : (arr[i]-num);
            ans = arr[i];
        }
    }
    return [arr, num, ans];
}

export default nearest;