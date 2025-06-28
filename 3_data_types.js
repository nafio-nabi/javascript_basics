// JavaScript supports different data types.
// The data types JavaScript supports are grouped into two categories: primitive data types, non-primitive data types.

// Primitive data types:

// String.
// String is a collection of characters.
// String data type is used to represent textual data.
const firstName = "John";
console.log(firstName);
const lastName = 'Doe';
console.log(lastName);

// Number.
// Number data type is used to represent numerical data. For example, integers (25), and floating-point/decimal (12.23);
let userAge = 25;
console.log(userAge);
let useHeight = 5.2;
console.log(useHeight);

// Boolean.
// Boolean data type is used to represent boolean data. For example, true, false.
const isMale = true;
console.log(isMale);
let isProgrammer = false;
console.log(isProgrammer);

// Undefined.
// Undefined data type is used to represent a variable with no value.
let isUser;
console.log(isUser);

// Null.
// Null data type is used to represent an intentional absence of data.
let isFollower = null;
console.log(isFollower);

// Symbol.
// Symbol data type is a unique identified.

// BigInt.
// BigInt data type is used to represent large integers.

// Non-primitive data types:

// Object.
// Object data type is used to represent data as key-value pairs.
let user = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
};
console.log(user);

// Array.
// Array data type is used to represent data as an ordered list of values.
let userData = ["John", "Doe", 25];
console.log(userData);

// Function.
// A function is a reuseable block of code.

// typeof operator.
// Use typeof to check the data type of a value.
console.log(typeof(firstName));
console.log(typeof(userAge));
console.log(typeof(useHeight));
console.log(typeof(isMale));
console.log(typeof(isProgrammer));
console.log(typeof(isUser));
console.log(typeof(isFollower));
console.log(typeof(user));
console.log(typeof(userData));