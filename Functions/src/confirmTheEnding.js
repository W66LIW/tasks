"use strict"
export default
function confirmEnding2(str, target) {
  return str.includes(target, (str.length - target.length));
  }
  
  confirmEnding2("Bastian", "n");