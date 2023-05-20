"use strict"


function arrOfLargestsReduce(arr) {
    
return arr.reduce((largestArr, arr) => {
    let largest = -Infinity;
    for(let i = 0; i < arr.length; i++){
        largest = arr[i] > largest ? arr[i] : largest;        
    }
    largestArr.push(largest); // возвращает новую длину массива
    return  largestArr;
}, [])

}

arrOfLargestsReduce([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

function largestNumInArrsFor(arr) {
    let largestArr = [];
    for(let i = 0; i < arr.length; i++){
        let largest = -Infinity;
        for(let t = 0; t < arr[i].length; t++){
            if(arr[i][t] > largest){
                largest = arr[i][t];
            }
        }
        largestArr.push(largest);
    }
    return largestArr;
  }
  
  largestNumInArrsFor([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

  function largestNumInArrsReduce(arr) {
    return arr.reduce(
        (largest, num) => {
           return typeof num !== "number" ?
            (largestNumInArrsReduce(num) > largest ? largestNumInArrsReduce(num) : largest) :
             (num > largest ? num : largest);
        }, 0);
  }
  
  largestNumInArrsReduce([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 857, 1]]);

  export {arrOfLargestsReduce, largestNumInArrsFor, largestNumInArrsReduce}