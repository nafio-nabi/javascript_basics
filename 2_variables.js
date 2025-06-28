// A variable is like a labeled box that stores a value in memory, so you can use or change it later in your program.

// Variable naming rules:
// Use camelCase: userAge.
// Valid: firstName, $age, _isUser.
// Invalid: 123name, user Age, let, const, var.

// let.
// Use let for variables whose value may change in the future.
// When using let, it's not necessary to declare and assign the variable at the same time. Variable can be declared and variable assignment can happen later.
// When using let, variable is block scoped.
// Variable declaration.
let userAge;

// Variable assignment.
userAge = 25;

// Print variable.
console.log(userAge);

// Variable reassignment.
userAge = 26;

// Print variable.
console.log(userAge);

// const.
// Use const for variables whose value won't change.
// When using const, variable must be declared and assigned at the same time.
// When using const, variable is block scoped.
// Declare a variable and assign a value to that variable.
const firstName = "John";

// Print the variable.
console.log(firstName);

// Variable reassignment.
// When using const keyword, variable reassignment is not allowed.
// This will throw an error:
// firstName = "Josh";

// Print the variable.
// console.log(firstName);

// var.
// Avoid using var as it is not the preferred way to declare variable in modern JavaScript development.
// Use var for variables whose value may change in the future.
// When using var, it's not necessary to declare and assign the variable at the same time. Variable can be declared and variable assignment can happen later.
// When using const, variable is function scoped.
// Variable declaration.
var isUser;

// Variable assignment.
isUser = true;

// Print the variable.
console.log(isUser);

// Variable reassignment
isUser = false;

// Print the variable.
console.log(isUser);