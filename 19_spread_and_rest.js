// Use spread to expand elements.
// Use rest to gather remaining elements.

// Spread in arrays.
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);

// Spread in objects.
const user = { name: "John" };
const fullUser = { ...user, age: 25 };
console.log(fullUser);

// Rest in function parameters
function sum(...nums) {
    return nums.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3));

// Rest in array destructuring.
const [first, ...rest] = [1, 2, 3, 4];
console.log(rest);