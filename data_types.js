// Numbers
let intNum = 10;
let floatNum = 13.99;
let negativeNum = -5;
let positiveNum = 5;
let infiniteNum = Infinity;
let notANum = "abc" -2;

console.log(intNum, floatNum, negativeNum, positiveNum, infiniteNum, notANum);
console.log(typeof(intNum));
console.log(typeof(floatNum));
console.log(typeof(infiniteNum));
console.log(typeof(notANum));


// Strings
const firstName = 'Nafio';
const lastName = 'Nabi';
const fullName = `${firstName} ${lastName}`;
console.log(firstName, lastName, fullName);
console.log(typeof(firstName));
console.log(typeof(fullName));

// Boolean
let supportsBarca = false;
let supportsReal = true;
console.log(supportsBarca, supportsReal);
console.log(typeof(supportsBarca));
console.log(typeof(supportsReal));

// Undefined
let likesCPP;
console.log(likesCPP);
console.log(typeof(likesCPP));

// Null
let user = null;
console.log(null);
console.log(typeof(user));

// Symbol
let sym1 = Symbol('id');
let sym2 = Symbol('id');
console.log(sym1 === sym2);
console.log(typeof(sym1));

// BigInt
let bigInt = 123456789012345678901234567890n;
console.log(bigInt);
console.log(typeof(bigInt));

// Objects
let bio = {
    firstName: 'Nafio',
    lastName: 'Nabi',
    age: 32,
    supportsBarca: false,
};
console.log(bio);
console.log(typeof(bio));

// Arrays
let nums = [1, 2.1, 3];
let mixedData = ['John', 32, false, undefined, null, bio];
console.log(nums);
console.log(mixedData);
console.log(typeof(nums));

// Functions
let greet = function() {
    return 'Hello, world';
}

console.log(greet());
console.log(typeof(greet));

// Date
let today = new Date();
console.log(today);
console.log(typeof(today));

// Map
let map = new Map();
map.set('name', 'Nafio');
console.log(map);
console.log(typeof(map));

// Set
let set = new Set();
set.add(1).add(2).add(3);
console.log(set);
console.log(typeof(set));

// Type conversion
console.log(5 + "5");
console.log("5" - 2);

let num = Number("123");
console.log(typeof(num));

let str = String(123);
console.log(typeof(str));

let bool = Boolean(1);
console.log(typeof(bool));