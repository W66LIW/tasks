"use strict"

const mtrx = [
    // [1, 1],
    // [1, 1]
    [2, -3, 1],
    [5, 4, -2]
]

const mtrx2 = [
    // [1, 1],
    // [1, 1]
    [-7, 5],
    [2, -1],
    [4, 3]
]




const multiply = () => {
    if (mtrx[0].length != mtrx2.length) {
        return "Multiplication is impossible";}

    let matrix = [];

    for (let i = 0; i < mtrx.length; i++) {
        matrix.push([]);
        for (let ii = 0; ii < mtrx2[0].length; ii++) {

            let item = 0;
            for (let a = 0; a < mtrx[0].length; a++) {
                item = item + mtrx[i][a] * mtrx2[a][ii];
                console.log(item)
            }

            matrix[i].push(item);
        }
    }

    return matrix;
}


const subtract = () => {
    if (mtrx.length != mtrx2.length || mtrx[0].length != mtrx2[0].length) {
        return "Subtraction is impossible";
    }

    let matrix = [];

    for (let i = 0; i < mtrx.length; i++) {
        matrix.push([])

        for (let ii = 0; ii < mtrx[i].length; ii++) {
            matrix[i].push(mtrx[i][ii] - mtrx2[i][ii]);
        }
    }

    return matrix;
}


const add = () => {
    if (mtrx.length != mtrx2.length || mtrx[0].length != mtrx2[0].length) {
        return "Addition is impossible";
    }

    let matrix = [];

    for (let i = 0; i < mtrx.length; i++) {
        matrix.push([])

        for (let ii = 0; ii < mtrx[i].length; ii++) {
            matrix[i].push(mtrx[i][ii] + mtrx2[i][ii]);
        }
    }

    return matrix;
}
