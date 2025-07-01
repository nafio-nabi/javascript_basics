// Destructuring: extract values from arrays and objects.

// From arrays
const colors = ["red", "green", "blue"];

const [first, second] = colors;
console.log(first);
console.log(second);

// From objects
const user = { name: "John", age: 25 };
const { name, age } = user;
console.log(name);
console.log(age);