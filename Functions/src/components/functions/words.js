"use strict"

function words(str){
    return (new Set(str.split(/\s/))).size;
}

export default words;