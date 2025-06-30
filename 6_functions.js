// A function is a reuseable block of code that performs a specific task. Instead of repeating the same block of code, you write it once in a function, and then call the function when you need it.

// Declare a function
function helloWorld() {
    console.log("Hello World!");
}

// Invoke/call the function.
helloWorld();


// Declare a function with parameters.
function greetUser(name) {
    console.log("Hello, " + name + "!");
}

// Invoke/call the function.
greetUser("John");

// Declare a function that returns a value.
function addition(a, b) {
    return (a + b);
}

// Invoke/call the function.
let result = addition(2, 2)
console.log(result);

function double(num) {
    return (num * 2);
}

// Invoke/call the function.
console.log(double(5));

function calculateArea(width, height) {
    let area = width * height;
    return area;
}

// Invoke/call the function.
console.log("Area is " + calculateArea(2, 4));

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

// Invoke/call the function.
console.log(isEven(10));
console.log(isEven(7));

// Function expression.
let multiply = function(a, b) {
    return (a * b);
}

// Invoke/call the function.
console.log(multiply(2, 2));

// Arrow function.
const greet = (name) => {
    console.log("Hi, " + name + "!");
};

// Invoke/call the function.
greet("John");

const square = x => x * x;

// Invoke/call the function.
console.log(square(5));

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