"use strict"
export default
function frankenSplice(arr1, arr2, n) {

    // let arr = [];     // не работает с frankenSplice([1, 2, 3, 4], [], 0) should return [1, 2, 3, 4].
    // for(let i = 0; i < arr2.length; i++) {
    //     if(i === n) arr.push(...arr1, arr2[i])
    //     else arr.push(arr2[i])
    // } 
    // return arr;

    let arr = [];
    arr.push(...arr2)
    arr.splice(n, 0, ...arr1);
    return arr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);