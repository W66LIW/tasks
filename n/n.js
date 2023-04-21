"use strict"

 const a = +prompt('a =');
 const b = +prompt('b =');

 const mkStr = (a) => {
    let arrStr = [];
    for(let t = a; t > 0; t--){
    arrStr.push(+0)};
    return arrStr;
}

 const mkTable = (a, b) => {
    if(a > 0 && b > 0){
        let arr = [];

    for(let i = b; i > 0; i--) {
        arr.push(mkStr(a))
    }

    return arr;

    } else {
        console.log("Error: the length < 0");
        return undefined;
        
    }
 }

 
 const inLine = (arr, li) => {
    if(li < 1){
        for(let i = 0; i < arr[li].length; i++){ 
    
            if((arr[li][i-1] != 1) || (arr[li][i-1] === undefined) &&
               (arr[li][i+1] != 1) || (arr[li][i+1] === undefined) &&
               (arr[li+1][i] != 1) || (arr[li+1][i] === undefined)){
    
                arr[li][i+1] = false;
            }
        }
        
        return arr;

    } else {
        for(let i = 0; i < arr[li].length; i++){ 
    
            if((arr[li][i-1] != 1) || (arr[li][i-1] === undefined) &&
               (arr[li][i+1] != 1) || (arr[li][i+1] === undefined) &&
               (arr[li-1][i] != 1) || (arr[li-1][i] === undefined) &&
               (arr[li+1][i] != 1) || (arr[li+1][i] === undefined)){
    
                arr[li][i+1] = false;
            }
        }
        
        return arr;

    }
        
    
 }

 const inTable = (arr) =>  {

    for(let i = 0; i < arr.length; i++){
        inLine(arr, i);
    }

    return arr;

 }


console.log(inTable(mkTable(a, b)));
//console.log((mkTable(a, b))[-1][2])

