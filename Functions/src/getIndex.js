"use strict"
export default
function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort(function(a, b) {
        return a - b;
      });
    let i = arr.indexOf(num);

    return i;
  }
  
  getIndexToIns( [40, 60], 50);