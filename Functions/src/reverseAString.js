"use strict"

export {reverseString3, reverseString2, reverseString}

/////////////////////////////////////////////////////////////////////

// С помощью рекурси
function reverseString3(str) {
 //   return str == "" ? "" : reverseString2(str.substr(1))+str.charAt(0);

if(str == "") return;
else
return reverseString2(str.substr(1))+str.charAt(0);
}





/////////////////////////////////////////////////////////////////////

// Без перевода в массив
function reverseString2(str) {
    let reverseStr = "";

    for(let i = str.length-1; i >= 0; i--){
        reverseStr += str[i];
    }
    return reverseStr;
}

//////////////////////////////////////////////////////////////////////

// Переворот строки с помощью встроенных методов

function reverseString(str) {

 return str.split("").reverse().join("");

    // let arr = str.split("");
    // let arr2 = arr.reverse();

    // // for(let i = 0; i < arr.length; i++){ // альтернатива reverse()
    // //   arr2.unshift(arr[i]);
    // // }
    
    // let str2 = arr2.join("");
    
    //   return str2;
    }
    
    reverseString("hello");

    