// An array is a special type of variable that can store multiple values in a single variable. It's like a list or collection.

// Declaring an array. An array can hold any data type.
let fruits = ["apple", "banana", "mango"];
let emptyList = [];
let mixedDataType = ["String", 10, 5.7, true, false, undefined, null, [1, 2,], { name: "John", age: 25 }];

// Accessing array elements.
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(mixedDataType);

// Modifying array elements.
fruits[1] = "Orange";
console.log(fruits[1]);

// Array length.
console.log(fruits.length);

// Common array methods.
let numbers = [1, 2, 3];
console.log(numbers);
numbers.push(4);
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.unshift(0);
console.log(numbers);
numbers.shift();
console.log(numbers);
console.log(numbers.indexOf(1));
console.log(numbers.includes(1));
console.log(numbers.includes(5));
console.log(numbers.slice(0,2));

// Looping through an array.
let programmingLanguages = ["JavaScript", "TypeScript", "Python"];
for (let programmingLanguage of programmingLanguages) {
    console.log(programmingLanguage);
}

let cities = ["California", "New York", "Seattle"];
console.log(cities);

cities.push("Virginia");
console.log(cities);

cities[1] = "Texas";
console.log(cities);

console.log(cities.includes("Delaware"));
console.log(cities.length);