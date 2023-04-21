"use strict"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let a = {
//     f: 1,
//     x1: 3,
//     y1: 5,
//     x2: 5,
//     y2: 3,
//     x3: 5,
//     y3: 7,
//     x4: 7,
//     y4: 5,
//     d: this.x1,
//     }

//     a.x = (Math.max(a.x1, a.x2, a.x3, a.x4) - Math.min(a.x1, a.x2, a.x3, a.x4)) / 2 + Math.min(a.x1, a.x2, a.x3, a.x4);
//     a.y = (Math.max(a.y1, a.y2, a.y3, a.y4) - Math.min(a.y1, a.y2, a.y3, a.y4)) / 2 + Math.min(a.y1, a.y2, a.y3, a.y4);



// console.log(a)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const mkCircles = (count) => {   // создает груги на диагонали

//     let os = [];

//     for (let i = 1; i < count+1; i++) {
//         os.push({
//             f: 0,
//             r: i,
//             x: i,
//             y: i
//         })
//     }
//     return os;
// }


class Target {
    constructor(f, x, y) {
        this.f = f,
            this.x = x,
            this.y = y
    }
}

const centre = (v1, v2, v3, v4) => {
    const centre = (Math.max(v1, v2, v3, v4) - Math.min(v1, v2, v3, v4)) / 2 + Math.min(v1, v2, v3, v4);
    return centre;
}

const equation = (x, y, x1, y1, x2, y2) => {
    const equation = ((x - x1) / (x2 - x1)) === ((y - y1) / (y2 - y1));
    return equation;
}

const circle = () => {

    const r = +prompt("Radius:");
    if (r < 1 || r > 1000) {
        console.log("Radius must be between 1 and 1000!");
        return undefined;}
    

    const x = +prompt("X:");
    if (x < -10000 || x > 10000) {
        console.log("X must be between -10 000 and 10 000!");
        return undefined;}
    

    const y = +prompt("Y:");
    if (y < -10000 || y > 10000) {
        console.log("Y must be between -10 000 and 10 000!");
        return undefined; }

    return {
        f: 0,
        r: r,
        x: x,
        y: y

        // r: 5, // готовый
        // x: 2,
        // y: 2            
    }
}

const rectangle = () => {

    const coordinates = [];

    for (let i = 0; i < 8; i++) {
        coordinates.push((i % 2) == 0 ? +prompt("Vertex coordinates: X") : +prompt("Vertex coordinates: Y"));
    }

    for (let i = 7; i >= 0; i--) {
        if (coordinates[i] < -10000 || coordinates > 10000) {
            console.log("Values must be between -10 000 and 10 000!");
            return undefined;}
    }

    const obj = {
        f: 1,
        x1: coordinates[0],
        y1: coordinates[1],
        x2: coordinates[2],
        y2: coordinates[3],
        x3: coordinates[4],
        y3: coordinates[5],
        x4: coordinates[6],
        y4: coordinates[7]

        // x1: 3, // готовый на диагонали
        // y1: 5,
        // x2: 5,
        // y2: 3,
        // x3: 5,
        // y3: 7,
        // x4: 7,
        // y4: 5,

        // x1: 2.5, // готовый не на диагонали
        // y1: 6.5,
        // x2: 4.5,
        // y2: 4.5,
        // x3: 6,
        // y3: 10,
        // x4: 10,
        // y4: 8,

        ////x: (Math.max(this.x1, this.x2, this.x3, this.x4) - Math.min(this.x1, this.x2, this.x3, this.x4)) / 2 + Math.min(this.x1, this.x2, this.x3, this.x4),
        ////y: (Math.max(this.y1, this.y2, this.y3, this.y4) - Math.min(this.y1, this.y2, this.y3, this.y4)) / 2 + Math.min(this.y1, this.y2, this.y3, this.y4)
        ////// this не работает
    }

    obj.x = centre(obj.x1, obj.x2, obj.x3, obj.x4);
    obj.y = centre(obj.y1, obj.y2, obj.y3, obj.y4);

    // obj.x = 10; // готовый
    // obj.y = 10;

    return obj;
}


const func = () => {

    const count = +prompt("Count:");

    if (count == 2 || count == 1) {
        return "Yes";
    } else if (count < 1 || count > 100000) { 
        return "Quantity must be between 1 and 100 000!" }

     const arr = [];

    for (let i = 0; i < count; i++) {

        const figure = prompt("Figure: circle(0) or rectangle(1)");

        if (figure == 0) {

            arr.push(circle());

        } else if (figure == 1) {

            arr.push(rectangle());

        } else return "Choose 0 or 1";
    }

    // let os = mkCircles(100000); // создает круги на диагонали
    // arr = [...arr, ...os];

    console.log(arr)



    for (let i = 2; i < arr.length; i++) {

        let a = equation(arr[i].x, arr[i].y, arr[i - 1].x, arr[i - 1].y, arr[i - 2].x, arr[i - 2].y);

        // a = equation(10, 15, 2, 2, 1, 1); // готовый

        if (a !== true) return "No";

    }

    return "Yes";

}

console.log(func());

