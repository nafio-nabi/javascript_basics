// Asynchronous JavaScript enables developers to build interactive and fast web apps.
// JavaScript is single-threaded: it runs one task at a time. But async features allows us to:
// Wait for slow tasks (API calls).
// Keep the browser responsive.
// Write code that doesn't freeze the page.

// setTimeout()
// setTimeout() delays execution. It schedules code to run later (non-blocking).
// console.log("Start");

// setTimeout(() => {
//   console.log("This runs after 2 seconds");
// }, 2000);

// console.log("End");

// fetch()
// fetch() enables you to make API requests. It lets you get data from a server or file.
// It returns a Promise.
// .then() is used to handle the result.
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then(response => response.json())
//   .then(data => console.log(data));

// Promise
// A Promise represents a value thay maybe available in the future.
// const promise = new Promise((resolve, reject) => { /* resolve() means success, reject() means error */
//   setTimeout(() => {
//     console.log("Done!");
//   }, 1000)
// });

// promise.then(result => console.log(result));

// async/await
// async/await is a cleaner syntax for Promise.
// async makes a function return a promise.
// await pauses execution until Promise resolves.
// async function loadPost() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const post = await response.json();
//   console.log(post);
// }

// loadPost();

function delayedGreeting() {
  setTimeout(() => {
    console.log("Hi after 3 seconds")
  }, 3000);
}

async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await res.json();
  console.log(user.name);
}

delayedGreeting();
getUser();