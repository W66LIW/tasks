"use strict"

const recursion = (arr, i) => {
    return (i == 0) ?
        [arr[i], (arr[i] + arr[i + 1]), arr[i + 1]] :
        [...recursion(arr, i - 1), (arr[i] + arr[i + 1]), arr[i + 1]];

}


const func = (a, n) => {

    if (n < 2) {
        return [a];
    } else {

        let arr = recursion(a, a.length - 2); // с рекурсией
        return ([a, ...func(arr, n - 1)]);

        // let arr = [a[0]]; // с циклом
        // for (let i = 1; i < a.length; i++) {
        //     arr.push(a[i] + a[i - 1]);
        //     arr.push(a[i]);
        // }
        // return ([a, ...func(arr, n - 1)]);

    }
}

const counter = (n) => {

    if (n < 1 || n > Math.pow(10, 13)) return "Value must be between 1 and 10^13!";

    const arr = func([1, 1], n);
    console.log(arr);

    let quantity = 0;

    for (let i = 0; i < arr[n - 1].length; i++) {
        if (arr[n - 1][i] == n) {
            quantity++;
        }
    }

    return quantity;
};
