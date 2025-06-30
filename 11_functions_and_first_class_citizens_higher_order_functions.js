// In JavaScript, functions are first-class objects.
// You can assign functions to variables.
// Pass functions as arguements to other functions.
// Return functions from other functions.
// Store functions in arrays and objects.

// Assign a function to variable.
const sayHello = function () {
    console.log("Hello!");
}

sayHello();

// Pass functions as arguments (callback functions)
function greetings(name) {
    console.log("Hello, " + name);
}

function processUser(callback) {
    const name = "John";
    callback(name);
}

processUser(greetings);

// Return a function.
// Higher-order function.
function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const doubled = multiplier(2);
console.log(doubled(5));

let numbers = [1, 2, 3];

let doubledNums = numbers.map(function (num) {
    return num * 2;
});

console.log(doubledNums);

let numsTwo = [10, 20, 30];

let plusTen = numsTwo.map(n => n + 10);

console.log(plusTen);