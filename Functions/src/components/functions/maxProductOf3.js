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

function maxProductOf3(str){
    const arr = toArr(str);
    //console.log("arr: " + arr);
    if(arr === false) return "Некорректный ввод";
    else if(arr.length < 3) return "Неверное количество";
    else if(arr.length === 3) return arr[0] + ", " + arr[1] + ", " + arr[2];

    let maxX = -1;
    let maxX2 = -1
    let maxX3 = -1;
    let maxY = 0;
    let maxY2 = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0){
            if(arr[i] > maxX) {
                maxX3 = maxX2;
                maxX2 = maxX;
                maxX = arr[i];
            }
            else if(arr[i] > maxX2) {
                maxX3 = maxX2;
                maxX2 = arr[i];
            }
            else if(arr[i] > maxX3) maxX3 = arr[i];
        } else if(arr[i] < 0) {
                if(arr[i] < maxY) {
                    maxY2 = maxY;
                    maxY = arr[i];
                }
                else if(arr[i] < maxY2) maxY2 = arr[i];

        }
    }
    console.log(null<1)
    console.log(undefined<0)
    console.log(null*(-7))
    console.log((null*(-7)) == 0)

    console.log(null*3)

    //if(){}

    if((maxX*maxX2*maxX3) > (maxY*maxY2*maxX)) return maxX + ", " + maxX2 + ", " + maxX3;
    else if((maxX*maxX2*maxX3) < (maxY*maxY2*maxX))return maxY + ", " + maxY2 + ", " + maxX;
    else return arr[0] + ", " + arr[1] + ", " + arr[2];
    
}

export default maxProductOf3;