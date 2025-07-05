// Control flow allows you to make decisions in your code.

// Control flow: if else if else.
let age = 20;

if (age >= 18) {
    console.log("You are an adult");
} else if (age >= 13) {
    console.log("You are an adult");
} else {
    console.log("You are a child");
}

// Control flow and comparison operators.
let userAge = 22;
let userName = "John";
let loggedIn = false;

if (userAge > 18) {
    console.log("You can sign up.");
}

if (userName === "John") {
    console.log("Welcome back " + userName);
}

if (loggedIn != true) {
    console.log("Please login.");
}

let temperature = 35;

if (temperature > 30) {
    console.log("It's hot!");
} else {
    console.log("It's normal!");
}

// Control flow and logical operators.
let userAgeOne = 19;
let hasID = true;

if (userAge >= 18 && hasID) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

// Control flow: switch
let fruitName = "apple";

switch (fruitName) {
    case "apple":
        console.log("It's an apple");
        break;
    case "banana":
        console.log("It's a banana");
        break;
    default:
        console.log("Unknown fruit");
}

let day = "Saturday";

switch (day) {
    case "Sunday":
        console.log("Weekend!");
        break;
    case "Monday":
        console.log("Workday");
        break;
    case "Tuesday":
        console.log("Workday");
        break;
    case "Wednesday":
        console.log("Workday");
        break;
    case "Thursday":
        console.log("Workday");
        break;
    case "Friday":
        console.log("Workday");
        break;
    case "Saturday":
        console.log("Weekend!");
        break;
}

// Control flow: loops.

// for loop.
for (let i = 1; i <= 5; i++) {
    console.log("Count: " + i);
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 10; i >= 1; i--) {
    console.log("Countdown: " + i);
}

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i + " is an even number.")
    }
}

// while loop.
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

// do while loop.
let varOne = 10;

do {
    console.log(varOne);
    varOne++;
} while (varOne > 11);

// for...of loop (arrays only)
let colors = ["red", "green", "blue"];

for (let color of colors) {
    console.log(color);
}

// for...in loop (objects only)
let person = {
    name: "John",
    age: 25,
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
