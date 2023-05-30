"use strict"

export default
function chunkArrayInGroups(arr, size) {
    let array = [];
    for(let i = 0; i < arr.length; (i+=size)) {
        let ar = [];
        for(let t = 0; t < size; t++){
            if(arr[i+t] !== undefined) ar.push(arr[i+t])
        }
        array.push(ar);       
    }
    
    return array;

  }