//////////////////////////////////
// Using bind() method
/////////////////////////////////

let multiply = function (x, y) {
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2); // value of x = 2
// value of y = 5
multiplyByTwo(5);                   //  Output - 10

let multiplyByThree = multiply.bind(this, 3);
multiplyByTwo(5);                   //  Output - 15




//////////////////////////
// Using Closures in JS
/////////////////////////

let multiplyNew = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

let multiplyByTwo2 = multiplyNew(2);
multiplyByTwo2(3);                           // Output - 6