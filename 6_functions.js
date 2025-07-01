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

// Declare a function with default parameters.
function greetUserOne(name = "Guest") {
    console.log("Hello, " + name);
}

greetUserOne();
greetUserOne("Josh");

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