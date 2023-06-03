
function genome(arr){
    const gen1 = arr[0];
    const gen2 = arr[1];
    if(gen1 == false || set2 == false) return "Некорректный ввод";

    let arr1 = [];
    let set2 = new Set();
    let ans = 0;

    for(let i = 1; i < gen1.length; i++){
        arr1.push(gen1[i-1]+gen1[i]);
    }

    for(let i = 1; i < gen2.length; i++){
        set2.add(gen2[i-1]+gen2[i]);
    }

    for(let i = 0; i < arr1.length; i++){
        if(set2.has(arr1[i])) ans++;
    }

    return ans;
}

export default genome;
