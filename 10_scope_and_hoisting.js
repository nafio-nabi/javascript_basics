// Scope refers to where in your code you can access variables.
// There are three main types of scope: global, block, and function.

// Global scope: variables declared outside any function or block.
// Variables with global scope can be accessed anywhere in your code.
let userName = "John";

function greetUser() {
    console.log("Hello, " + userName);
}

greetUser();

// Function scope: variables declared inside a function.
// Variables with function scope can be accesed only inside the function they are declared in.
// Variables declared with let have function scope.
function helloWorld() {
    let message = "Hello, World!";
    console.log(message);
}

helloWorld();
// This will throw an error.
// console.log(message);

// Block scope: variables declared, with let and const, inside a block.
// Variables declared, with let and const, inside a block can be accessed only inside the block they are declared in.
function add() {
    let x = 10;
    let y = 2;
    const result = x + y;
    console.log(result);
}

add();
// These will throw errors.
// console.log(x);
// console.log(result);

// Hoisting is JavaScript's behaviour of moving declarations to the top of their scope before the code runs.

// Function declaration are hoisted.
multiplication(2, 2);

function multiplication(numOne, numTwo) {
    let result = numOne * numTwo;
    console.log(result);
}

// Variables declared with var is declared but not initialized.
console.log(x);
var x = 10;

// Variables declared with let and const are hoisted but not initialized.
// These will throw errors.
// console.log(y);
// let y = 2;
// console.log(z);
// const z = 5;

// function testScope() {
//     if (true) {
//         var a = 1;
//         let b = 2;
//     }
//     console.log(a);
//     console.log(b);
// }

// testScope();

function scopeTest() {
    if (true) {
        let x = 10;
        var y = 20;
    }
    console.log(typeof x);
    console.log(typeof y);
}

scopeTest();