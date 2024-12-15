// Variables are containers for data. They allow you to label and reuse data in your code.

// Declaring variables with `let`, `const`, `var`.

// Declaring variables with `let`.
let x = 10;
console.log(x);

// Variables declared with `let` can't be re-declared in the same scope. This would throw an error:
// let x = 10;
// console.log(x);

// Variables declared with `let` can be reassigned a new value in the same scope.
x = 20;
console.log(x);

// Declaring variables with `const`.
const y = 30;
console.log(30);

// Variables declared with `const` can't be re-declared in the same scope. This would throw an error:
// const y = 30;
// console.log(30);

// Variables declared with `const` can't be reassigned a new value in the same scope. This would throw an error:
// y = 40;
// console.log(y);

// Declaring variable with `var`.
var z = 40;
console.log(z);

// Variables declared with `var` can be re-declared and reassigned a new value in the same scope.
var z = 50;
console.log(z);

// Variable naming rules:
// Variable names can't start with a number.
// Variable names can't have empty spaces.
// Variable names can't use reserved keywords (let, const, if, for, etc).
// Variable names are case-sensitive (myvar and myVar different).
// Variable names must start with a letter, $, _.
// Variable names should be descriptive.
// Variable names should be camel-cased.
const firstName = 'Nafio';
console.log(firstName);

// Variables can store different types of data:
const nickName = 'Fahad'; // String.
let age = 32; // Number (integer).
let height = 5.9 // Number (decimal).
const supportsRealMardid = true // Boolean (true).
const supportsBarcelona = false // Boolean (false).
let ageNextYear; // Undefined.
let likesGolf = null; // Null.
let favouriteProgrammingLanguages = ['JavaScript', 'TypeScript', 'Python', 'C++']; // Array
let favouriteDatabases = {
    relationalDatabase: 'PostgreSQL',
    nonRelationalDatabase: 'MongoDB',
}; // Object
console.log(nickName, age, height, supportsRealMardid, supportsBarcelona, ageNextYear, likesGolf, favouriteProgrammingLanguages, favouriteDatabases);

// Variable scope (global, block, function)
let globalScopeVar = 'global'; // global scope.

function testScope() {
    let blockScopeVar = 'block'; // block scope.
    var functionScopeVar = 'block' // function scope
    const x = 30; // block.
    console.log(globalScopeVar); // global scope.
    console.log(blockScopeVar); // block scope.
    console.log(functionScopeVar); // function scope.
    console.log(x);
}

testScope();
console.log(globalScopeVar);
// console.log(functionScopeVar);
// console.log(blockScopeVar);
console.log(x);

// Hoisting
// console.log(numOne);
// var numOne = 1;

// console.log(numTwo);
// let numTwo = 2;

// console.log(numThree);
// const numThree = 3;

// Reassignment and mutability
// `let` allows reassignment and mutation
let car = {
    brand: 'Toyota',
    CC: 1800,
    sedan: true,
};
console.log(car);
car.brand = 'Honda';
console.log(car);

car = {
    door: 4,
    color: 'black',
}
console.log(car);

// `const` doesn't allows reassignment but allows mutation
const manu = {
    origin: 'Britain',
    league: 'EPL',
};
console.log(manu);
manu.league = 'UCL';
console.log(manu);

// manu = {
//     legend: 'CR7',
//     position: 'Forward'
// };
// console.log(manu);