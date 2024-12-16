// Control flow dictates the sequence in which code is executed.
// It allows you to build logic into your programs to handle different
// conditions and execute specific actions accordingly.

// Sequential execution.
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Nafio'));

// Conditional statements
// if statement
let age = 18;
if (age >= 18) {
    console.log('You are an adult.');
}

// if else statement
let ageOne = 16;
if (ageOne >= 18) {
    console.log('You are an adult');
} else {
    console.log('You are not an adult');
}

// if else if else statement
let score = 85;

if (score >= 90) {
    console.log('Grade: A');
} else if (score >= 75) {
    console.log('Grade: B');
} else {
    console.log('Grade: C');
}

// Ternary operator
let ageTwo = 18;
let status = ageTwo >= 18 ? 'Adult' : 'Minor';
console.log(status);

// switch statement
let day = 1;

switch (day) {
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log('Invalid day');
}

// Loops
// for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// while loop
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// do while loop
let j = 1;
do {
    console.log(j);
    j++
} while (j <= 5);

// for of loop
let fruits = ['Apple', 'Banana', 'Mango'];
for (let fruit of fruits) {
    console.log(fruit);
}

// for in loop
let user = {
    name: 'Nafio',
    age: 32,
    isProgrammer: true,
};

for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}

// break statement
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);
}

// continue statement
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}

// Error handling
try {
    let result = 10 / 0;
    console.log(result);
    throw new Error("Custom error!");
} catch (error) {
    console.log(`Error: ${error.message}`);
} finally {
    console.log('This block always executes');
}

// Asynchronous Control Flow
// setTimeout
setTimeout(() => {
    console.log('Executed after 2 seconds')
}, 2000);

// setInterval
let count = 0;
let interval = setInterval(() => {
    count++;
    console.log(`Count: ${count}`);
    if (count === 5) clearInterval(interval);
}, 1000);

// Promises and async/await
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com"');
        let data = response.json();
        console.log(data);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

fetchData();