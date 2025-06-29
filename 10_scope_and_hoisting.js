// Scope refers to where in your code you can access variables. There are main types of scope: global, block, function.

// Global scope: a variable declared outside any function or block. It can be accessed anywhere in your code.
let name = "John"

function greet() {
    console.log("Hello " + name);
}

greet();

// Function scope: a variable declared inside a function. It can only be accessed within that function.
function helloWorld() {
    let message = "Hello World!";
    console.log(message);
}

helloWorld();
// This will throw an error.
// console.log(message);

// Block scope: variables declared with let and const inside a block. It can only be accesed within that block.
function addition() {
    let a = 2;
    let b = 5;
    console.log(a + b);
}

addition();
// This will throw an error.
// console.log(a);

// Hoisting: moving declarations to the top of their scope before the code runs.

// Function declaration are hoisted.
console.log(multiplication(2, 2));

function multiplication(numOne, numTwo) {
    return (numOne * numTwo);
}

// Var is hoisted but not initalized.
console.log(a);
var a = 5;

// let and const are not fully hoisted.
// This will throw an error.
// console.log(b);
// const b = 10;

function testScope() {
    if (true) {
        var a = 1;
        var b = 2;
    }
    console.log(a);
    console.log(b);
}

testScope();