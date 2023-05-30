"use strict"
export default 
function mutation(arr) {
    if(typeof arr[0] !== "string" || typeof arr[1] !== "string") return "Empty";
    if(arr[0].length <= 0 || arr[1].length <= 0) return "Empty";
    
    for(let i = 0; i < arr[1].length; i++) {
        if(arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) === -1 ) return false;
    }
    return true;
  }
  
  mutation(["hello", "hey"]);