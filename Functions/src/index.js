"use strict"
 import mutation from "./indexcopy"
 import getIndexToIns from "./getIndex"
 import Post from "./Post"
 import bouncer from "./falsyBouncer"
 import frankenSplice from "./sliceAndSplice"
 import titleCase from "./titleCaseASentence"
 import booWho from "./booWho"
 import findElement from "./findersKeepers"
 import truncateString from "./truncateAString"
 import repeatStringNumTimes from "./repeatAString"
 import confirmEnding2 from "./confirmTheEnding"
 import confirmEnding from "./indexOf"
 import { arrOfLargestsReduce, largestNumInArrsFor, largestNumInArrsReduce } from "./largestNumbersInArrays"
 import { findLongestWordLength, findLongestWordLength2 } from "./findeTheLongestWordInAString"
 import { reverseString, reverseString2, reverseString3 } from "./reverseAString"

 const post = new Post("TittttLe")
function chunkArrayInGroups(arr, size) {
    let array = [];
    for(let i = 0; i < arr.length; (i+=size)) {
        let ar = [];
        for(let t = 0; t < size; t++){
            if(arr[i+t] !== undefined) ar.push(arr[i+t])
        }
        array.push(ar);       
    }
    
    return array;

  }

  console.log("Method post.toString: " + post.toString());
  console.log("Method post.toStr: " + post.toStr(333333));
  console.log("Function chunkArrayInGroups: " + chunkArrayInGroups(["a", "b", "c", "d"], 2));
  console.log("Function mutation: " + mutation(["hello", "heyll"]))
  console.log("Function getIndexToIns: " + getIndexToIns([40, 60], 50));
  console.log("Function bouncer: " + bouncer([7, "ate", "", false, 9]));
  console.log("Function frankenSplice: " + frankenSplice([1, 2, 3], [4, 5, 6], 1));
  console.log("Function titleCase: " + titleCase("I'm a little tea pot"));
  console.log("Function booWho: " + booWho(null));
  console.log("Function findElement: " + findElement([1, 2, 3, 4], num => num % 2 === 0));
  console.log("Function truncateString: " + truncateString("A-tisket a-tasket A green and yellow basket", 8));
  console.log("Function repeatStringNumTimes: " + repeatStringNumTimes("A-", 3));
  console.log("Function confirmEnding2: " + confirmEnding2("Bastian", "n"));
  console.log("Function confirmEnding: " + confirmEnding("Meerim", "rim"));
  console.log("Function arrOfLargestsReduce : " + arrOfLargestsReduce([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  console.log("Function largestNumInArrsFor: " + largestNumInArrsFor([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  console.log("Function largestNumInArrsReduce: " + largestNumInArrsReduce([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 857, 1]])) 
  console.log("Function findLongestWordLength: " +  findLongestWordLength("The quick brown fox jumped over the lazy dog"))
  console.log("Function findLongestWordLength2: " +  findLongestWordLength2("The quick brown fox jumped over the lazy dog"))
  console.log("Function reverseString: " + reverseString("Meerim"));
  console.log("Function reverseString2: " + reverseString2("Apple"));
  console.log("Function reverseString3: " + reverseString3("Milk"));