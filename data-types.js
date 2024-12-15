// JavaScript has two data types: primitive and non-primitive (reference).

// Primitive data types are immutable and stored by value.
// Number: interger, decimal/floating-point, positive, negative, infinity, and not a number.
let intNum = 50 // Integer
let floatNum = 9.99 // Decimal/Floating-point
let positiveNum = 1 // Positive 
let negativeNum = -1 // Negative
let infinity = Infinity // Infinity
let notANum = NaN // Not a number
console.log(intNum, floatNum, positiveNum, negativeNum, infinity, notANum);

// String: textual data.
const firstName = 'Nafio';
const lastName = "Nabi";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

// Boolean: true/false.
const isBangladeshi = true;
const supportsBarca = false;
console.log(isBangladeshi, supportsBarca);

// Undefined
let favouriteColour;
console.log(favouriteColour);

// Null
let futureAge = null;
console.log(null);

// Symbol
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2);

// BigInt
let bigIntOne = 123456789012345678901234567890n;
console.log(bigIntOne);

// Non-primitive data types are mutable and stored by reference.
// Object
let markZuckerberg = {
    name: 'Mark Zuckerberg',
    age: 40,
    isProgrammer: true,
    founder: 'Meta',
};

console.log(markZuckerberg);
console.log(markZuckerberg.name);
console.log(markZuckerberg.age);
console.log(markZuckerberg.isProgrammer);
console.log(markZuckerberg.founder);

// Array
let dataTypes = ['string', 32, 9.99, true];

console.log(dataTypes);
console.log(dataTypes[0]);
console.log(dataTypes[1]);
console.log(dataTypes[2]);
console.log(dataTypes[3]);

// Function
let greet = function() {
    console.log('Hello world!');
}

greet();

// Date
let today = new Date();
console.log(today);

// Map
let map = new Map();
map.set('name', 'Nafio');
console.log(map);

// Set
let set = new Set();
set.add(1).add(2).add(3);
console.log(set);

// Type checking
console.log(typeof(intNum));
console.log(typeof(firstName));
console.log(typeof(isBangladeshi));
console.log(typeof(favouriteColour));
console.log(typeof(futureAge));
console.log(typeof(sym1));
console.log(typeof(bigIntOne));
console.log(typeof(markZuckerberg));
console.log(typeof(dataTypes));
console.log(typeof(greet));
console.log(typeof(today));
console.log(typeof(map));
console.log(typeof(set));

// Type conversion
// Implicit conversion
console.log(5 + "5");
console.log("5" - 2);

// Explicit conversion
console.log(Number("123"));
console.log(String(123));
console.log(Boolean(1));