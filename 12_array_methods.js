// Array method: .map()
// Transform each item: .map() creates a new array by appying a function to each item in original array. Doesn't change the original array. Always returns a new array.
const numbers = [1, 2, 3];

console.log(numbers);

const doubled = numbers.map(n => n * 2);

console.log(doubled);


// Array method: .filter()
// Select some items: .filter() creates a new array containing only elements that pass a test (return true from callback).
const numbersTwo = [1, 2, 3, 4, 5];

console.log(numbersTwo);

const evens = numbersTwo.filter(n => n % 2 === 0);

console.log(evens);

// Array method: .reduce()
// .reduce() applies a function to each item to produce a single result.
const numbersThree = [1, 2, 3, 4];

const total = numbersThree.reduce((acc, curr) => acc + curr, 0);

console.log(total);

const users = [
    { name: "Ali", age: 25 },
    { name: "Sara", age: 19 },
    { name: "Tom", age: 32 },
];

const names = users.map(user => user.name);
console.log(names);

const adults = users.filter(user => user.age >= 21);
console.log(adults);

const totalAge = users.reduce((sum, u) => sum + u.age, 0);
console.log(totalAge);