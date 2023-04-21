"use strict"

//const str = prompt('str = ');

const polindrom = (str) => {
    let arr = [];
        
    if(str){
        arr = str.split("");}

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < "A" ||
           (arr[i] > "Z" && arr[i] < "a") ||
           arr[i] > "z" ) {
            return "Error!";
           }
    }

    if(arr.length > 200000 || arr.length < 2){
           return "Error";
    }
    
        for(let i = 0; i < arr.length; i++){
            if(arr[i] == arr[i+1]){
                return (`${arr[i]}${arr[i+1]}`);
            }
        } 
    
        for(let i = 0; i < arr.length; i++){
            if (arr[i-1] == arr[i+1]){
                return (`${arr[i-1]}${arr[i]}${arr[i+1]}`);            
            }
        }
    
        return("No polindrom");  
    
}




//console.log(polindrom(str));