"use strict"
export default
function truncateString(str, num) {
  let newStr = str.slice(0, num);
  return newStr.length === str.length ? newStr : newStr+"...";
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);