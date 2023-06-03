function toArr(str) {
    const arrOfstr = str.split(" ");
    let arr = [];
    for(let i = 0; i < arrOfstr.length; i++){
        if(isNaN(arrOfstr[i])) return false;
        else arr.push(arrOfstr[i]);
    }
    return arr;
}

function calculator(arr){
    const set1 = new Set(toArr(arr[0]));
    const set2 = new Set(arr[1]);
    if(set1 == false || set2 == false) return "Некорректный ввод";

    let ans = [];

    for(const num of set2) {
        if(!set1.has(num)) ans.push(num);
    }
    console.log(set1, set2)
    return ans.length;
}

export default calculator;