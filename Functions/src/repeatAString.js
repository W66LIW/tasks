"use strict"
export default
function repeatStringNumTimes(str, num) {
    let string = "";
    for(let i = num; i > 0; i--){
        string += str;
    }
    return string;
  }
  
  repeatStringNumTimes("A-", 3);