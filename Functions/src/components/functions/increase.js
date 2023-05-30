"use strict"

function toArr(str) {
    //const arr = str.split(", ");
    const arr = str.split(" ");
    for(let i = 0; i < arr.length; i++) {
        if(typeof +arr[i] != "number") return false;
    }
    return arr;
}


function increase(str) {
    const arr = toArr(str);
    if(arr == false) return "Некорректный ввод";

    if(arr.length < 2) return "NO";
    
    console.log("arr: "+JSON.stringify(arr));
    
    for(let i = 1; i < arr.length; i++){
        if(+arr[i] <= +arr[i-1]) return "NO";
    }
    return "YES";
}

export default increase; 