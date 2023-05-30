"use strict"

function toArr(str) {
    const arr = str.split(" ");
    for(let i = 0; i < arr.length; i++) {
        if(typeof +arr[i] !== "number") return false;
    }
    return arr;
}


function sequence(str){
    const arr = toArr(str);
    if(arr == false) return "Некорректный ввод";
    if(arr.length < 2) return "NO";
    
    console.log("arr: "+JSON.stringify(arr));

    let ans = "";
    let cons = 0;
    let ASCENDING = 0;
    let DESCENDING = 0;
    


    for(let i = 1; i < arr.length; i++) {
        if(+arr[i] == +arr[i-1]){
            cons++;
        } else if (+arr[i-1] < +arr[i]) {
            ASCENDING++;
        } else if (+arr[i-1] > +arr[i]) {
            DESCENDING++;
        }
    }

    if(cons == arr.length-1) return "CONSTANT";
    else if(ASCENDING === arr.length-1) return "ASCENDING";
    else if(DESCENDING === arr.length-1) return "DESCENDING";
    else if(DESCENDING === 0) return "WEAKLY ASCENDING";
    else if(ASCENDING === 0) return "WEAKLY DESCENDING";
    else return "RANDOM";
    

}

export default sequence;