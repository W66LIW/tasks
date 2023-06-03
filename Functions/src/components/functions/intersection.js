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

function intersection(arr){
    let arr1 = toArr(arr[0]);
    let arr2 = toArr(arr[1]);
    if(arr1 == false || arr2 == false) return "Некорректный ввод";
    
    console.log(arr)

    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    let ans = [];

    for(let num of set1) {
        if(set2.has(num)) ans.push(num);
    }

    return ans.sort((a, b) => a-b);
}

export default intersection;