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

function palindrom(str) {
    const arr = toArr(str);
    //console.log("arr: " + arr);
    if(arr === false) return "Некорректный ввод";
    else if(arr.length < 1) return "Неверное количество";

    const mid = Math.ceil(arr.length/2);
    //console.log("mid = " + mid)
   

    // for(let t = mid; t < arr.length; t++) {
    //     console.log("t = " + t)        
        
    //     for(let i = t; i < arr.length; i++) {
    //         console.log("i = " + i)
        
    //           if(arr[(arr.length-1-t)*2-1-i] === arr[i]) {
    //             console.log(arr[(arr.length-1-t)*2-1-i+t-i] + " === " + arr[i] + " = " + (arr[(arr.length-1-t)*2-1-i+t-i] === arr[i]))
    //             i++;
    //         } else {
    //             console.log(arr[(arr.length-1-t)*2-1-i+t-i] + " !== " + arr[i] + " = " + (arr[(arr.length-1-t)*2-1-i+t-i] === arr[i]))
    //         }
    //     }
    //     //console.log("Last: " + (arr[arr.length-i] + " === " + arr[i-1] + " = " + (arr[arr.length-i] === arr[i-1]))) 
    // }

    
    for(let t = mid; t < arr.length; t++) {
        let i = t;
        while(i < arr.length) {
        
              if(arr[arr.length-1-i] === arr[i]) {
                console.log(arr[arr.length-1-i] + " === " + arr[i] + " = " + (arr[arr.length-1-i] === arr[i]))
                i++;
            } else {
                console.log(arr[arr.length-1-i] + " !== " + arr[i] + " = " + (arr[arr.length-1-i] === arr[i]))
                i = arr.length;
            }
        }
        //console.log("Last: " + (arr[arr.length-i] + " === " + arr[i-1] + " = " + (arr[arr.length-i] === arr[i-1]))) 
    }

    return "End";
       
}

export default palindrom;