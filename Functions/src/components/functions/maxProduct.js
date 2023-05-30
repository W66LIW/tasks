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

function maxProduct(str){
    const arr = toArr(str);
    console.log("arr: " + arr);
    if(arr === false) return "Некорректный ввод";
    else if(arr.length < 2) return "Неверное количество";
    else if(arr.length === 2) return arr[0] + ", " + arr[1];

    let maxX = -1;
    let maxX2 = -1;
    let maxY = null;
    let maxY2 = null;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0){
            if(arr[i] > maxX) {
                maxX2 = maxX;
                maxX = arr[i];
            }
            else if(arr[i] > maxX2) maxX2 = arr[i];
        } else if(arr[i] < 0) {
                if(arr[i] < maxY) {
                    maxY2 = maxY;
                    maxY = arr[i];
                }
                else if(arr[i] < maxY2) maxY2 = arr[i];
        }
    }
    console.log(null<1)
    console.log(null<0)
    console.log(null*(-7))
    console.log(null*3)

    if((maxX*maxX2) >= (maxY*maxY2)) return maxX + ", " + maxX2;
    else return maxY + ", " + maxY2;
}

export default maxProduct;