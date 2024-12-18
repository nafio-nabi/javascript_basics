// An array is an ordered list of values, which can hold any data type.
// Arrays are zero-indexed. It is a powerful data structure that lets you store, access
// and manipulate collections of data.

// Create an array
// object literal
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits);

// Using new Array()
const numbers = new Array(1, 2, 3);
console.log(numbers);

// Using Array.of()
const values = Array.of(5);
console.log(values);

// Accessing array elements
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

// Update an array element
fruits[1] = 'blueberry';
console.log(fruits);

// Array methods for manipulation
const realMadrid = ['Rodrygo', 'Vini', 'Mbappe'];
console.log(realMadrid);

// Add element to end of array
realMadrid.push('Jude');
console.log(realMadrid);

// Remove last element of array
realMadrid.pop();
console.log(realMadrid);

// Add element to first place of array
realMadrid.unshift('Modric');
console.log(realMadrid);

// Remove first element of array
realMadrid.shift('Modric');
console.log(realMadrid);

// splice
const colors = ['red', 'green', 'blue'];
console.log(colors);

// Remove 1 element at index 1.
colors.splice(1, 1);
console.log(colors);

// Add element at index 1.
colors.splice(1, 0, "yellow", "purple");
console.log(colors);

// Replace 1 element at index 2.
colors.splice(2, 1, "orange");
console.log(colors);

// Combine arrays: concat()
const fruits = ['apple', 'banana'];
const moreFruits = ['cherry', 'date'];

const combined = fruits.concat(moreFruits);
console.log(combined);

// Combine arrays: ...
const combined = [...fruits, ...moreFruits];
console.log(combined);

// Combine parts of an array: slice()
const colors = ['red', 'green', 'blue', 'yellow'];
const sliced = colors.slice(1, 3);
console.log(sliced);
console.log(colors);

// Searching in arrays
const fruits = ['apple', 'banana', 'cherry', 'apple'];

// indexOf()
console.log(fruits.indexOf('apple'));

// lastIndexOf()
console.log(fruits.lastIndexOf('apple'));

// includes()
console.log(fruits.includes('banana'));
console.log(fruits.includes('grape'));

// Iterating over arrays
const fruits = ['apple', 'banana', 'cherry', 'apple'];

// for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// forEach
fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});

// map
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

// Filtering and reducing arrays

// filter()
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// reduce()
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

// Sorting arrays
const fruits = ['banana', 'apple', 'cherry'];
console.log(fruits);
fruits.sort();
console.log(fruits);

const numbers = [10, 5, 8, 1];
console.log(numbers);
numbers.sort((a, b) => a - b);
console.log(numbers);

// Flattening arrays
const nested = [1, [2, [3, 4]], 5];
console.log(nested);
const flat = nested.flat(2);
console.log(flat);