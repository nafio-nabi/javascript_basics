// A function is a reusable block of code designed to perfrom a specific task. 
// Functions help organize code, reduce repetition, and make programs more modular.

// Declare functions

// Function keyword
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const helloWorld = function() {
    return 'Hello world!';
}

// Arrow function
const printName = (name) => {
    return `Hello, ${name}`;
}

// Call the function
console.log(greet('Nafio'));
console.log(greet('Fahad'));
console.log(helloWorld());
console.log(printName('Nabi'));

// Parameter and arguments
// Parameters
function add(a, b) {
    return a + b;
}

// Default parameters
function subtract(a = 5, b = 2) {
    return a - b;
}

function multiplication(x, y) {
    return x * y;
}

// Arguments
console.log(add(1, 1));
console.log(subtract(10, 5));
console.log(subtract());
console.log(multiplication(2, 2));

// Scope: global, local.
const globalScopeVar = 'Global';

function testScope() {
    const localScopeVar = 'Local';
    console.log(globalScopeVar);
    console.log(localScopeVar);
}

testScope();
// console.log(localScopeVar);

// Types of functions
// Anonymous function
// setTimeout(function() {
//     console.log('This runs after two seconds');
// }, 2000);

// Immediately invoked function expression
(function() {
    console.log('This runs immediately');
})();

// Callback functions
function processUserInput(callback) {
    const name = "Nafio";
    callback(name);
  }
  
processUserInput((name) => console.log(`Hello, ${name}`));

// Higher-order functions
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5));

// Closures
function outer() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = outer();
console.log(counter());
console.log(counter());

// Async function
async function fetchData() {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    return data;
}