"use strict"

// С методом sort()
function findLongestWordLength2(str) {
   return str.split(/[ ,.]/).sort((current, next) => {return next.length-current.length;})[0].length;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// С методом reduce()

function findLongestWordLength(str) {
    return str
    .split(/[ ,.]/) // Разделение по " ", ",", "."
    .reduce(
        (longestWordLength, word) => {
            return word.length > longestWordLength ? word.length : longestWordLength;
        }, 0
    );
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

  export {findLongestWordLength, findLongestWordLength2}