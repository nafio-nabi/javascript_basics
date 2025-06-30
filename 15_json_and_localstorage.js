// JSON and localStorage are essential for storing and retrieving data- especially for web apps.

// JSON is short for JavaScript Object Notation. It's a lightweight format for storing and exchanging data. JSON is like a string version of a JavaScript object.

// Create JSON.
// {
//     "name": "John",
//     "age": 25,
// }

// Convert JavaScript object to JSON.
const user = { name: "John", age: 25 };
const jsonString = JSON.stringify(user);
console.log(jsonString);

// Conver JSON to JavaScript object.
const jsonStringOne = jsonString;
const obj = JSON.parse(jsonStringOne);
console.log(obj);

// localStorage lets you store data in the browser. It stays even if the tab is closed or browser is restarted.
// localStorage can only store strings.
// Save data
localStorage.setItem("username", "John");

// Read data
const name = localStorage.getItem("username");
console.log(name);

// Remove data
localStorage.removeItem("username");

// Clear all
localStorage.clear();

// Storing JSON in localStorage.
const userOne = { name: "Nafio", age: 25 };
localStorage.setItem("userOne", JSON.stringify(userOne));
const savedUser = JSON.parse(localStorage.getItem("userOne"));
console.log(savedUser.name);