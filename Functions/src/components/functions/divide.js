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

function divide(arr){
    let arr1 = toArr(arr[0]); 
    let cubes1 = toArr(arr[1]);
    
    if(arr1 == false || cubes1 == false) return "Некорректный ввод";

    let cubes2 = cubes1.splice(arr1[0]);

    const set1 = new Set(cubes1);
    const set2 = new Set(cubes2);
    let dif = [];
    let difSet1 = [];
    let difSet2 = [];

    for(let num of set1) {
        if(set2.has(num)) dif.push(num);
    }

    for(let num of set1) {
        if(!set2.has(num)) difSet1.push(num);
    }

    for(let num of set2) {
        if(!set1.has(num)) difSet2.push(num);
    }

    
    //console.log([dif.length, dif.sort((a, b) => a-b), difSet1.length, difSet1.sort((a, b) => a-b), difSet2.length, difSet2.sort((a, b) => a-b)])

    return [dif.length, dif.sort((a, b) => a-b), difSet1.length, difSet1.sort((a, b) => a-b), difSet2.length, difSet2.sort((a, b) => a-b)];
}

export default divide;