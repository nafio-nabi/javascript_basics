// JavaScript allows asynchronous programming, meaning it allows to perform non-blocking operations,
// like fetching data, handling user input, or interacting with APIs. It ensures applications remain
// responsive.

// Synchronous programming
console.log('Start');
for (let i = 1; i <= 1e9; i++) {}
console.log('End');

// Callback
console.log('Start');

setTimeout(function() {
    console.log('This runs after 2 seconds');
}, 2000);

console.log('End');

// Promise
const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve('Task completed successfully!');
    } else {
        reject('Task failed');
    }
});

myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

new Promise((resolve) => {
    setTimeout(() => resolve('Step 1 complete'), 1000);
})
.then((result) => {
    console.log(result);
    return 'Step 2 complete';
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log('Error:', error);
});

// async/await
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchData() {
    console.log('Fetching data...');
    await delay(2000);
    console.log('Data fetched!');
}

fetchData();
console.log('This runs while waiting for data');

// Fetching data from an API
// Using promise
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((data) => {
        console.log('Data fetched:', data);
    })
    .catch((error) => {
        console.log('Error fetching data:', error);
    });

// Using async/await
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log('Data fetched:', data);
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}
fetchData();

// Multiple asynchronous tasks
// Promise
function delay(ms, message) {
    return new Promise((resolve) => setTimeout(() => resolve(message), ms));
}
  
async function runTasks() {
    console.log("Starting tasks...");
    const [task1, task2] = await Promise.all([
        delay(3000, "Task 1 complete"),
        delay(1000, "Task 2 complete"),
    ]);

    console.log(task1);
    console.log(task2);
}

runTasks();

// Error handling with asynchronous code
// Callback
function fetchData(callback) {
    setTimeout(() => {
      const error = true;
      if (error) {
        callback("Something went wrong", null);
      } else {
        callback(null, "Data fetched successfully");
      }
    }, 1000);
}
  
fetchData((error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
});

// Promise and async/await
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log('Data:', data);
    } catch (error) {
        console.error('Error occured:', error.message);
    }
}

fetchData();