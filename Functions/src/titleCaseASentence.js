"use strict"
export default
function titleCase(str) {
    let string = "";
    for(let i = 0; i < str.length; i++){
        if(str[i-1] === " " || str[i-1] === undefined){
           string += str[i].toUpperCase();
        } else {
            string += str[i].toLowerCase();
        }
    }
    return string;
  }
  
  //titleCase("I'm a little tea pot");