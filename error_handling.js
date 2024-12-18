// In JavaScript errors can happen for many reasons: 
// a function receives an unexpected value.
// you try to access something that doesn't exist.
// A server request fails.
// Without proper handling, these errors can crash your application.
// Error handling allows you to detect, handle, and recover from such situations smoothly.

try {
    console.log(notDefinedVar);
} catch (error) {
    console.log('Error name: ', error.name);
    console.log('Error message: ', error.message);
    console.log('Stack trace: ', error.stack);
}

try {
    console.log('Trying to run the code...');
    throw new Error('Something went wrong!');
} catch (error) {
    console.log('Caught an error: ', error.message);
} finally {
    console.log('Finally block runs no matter what.');
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.log('Error:', error.message);
}

// Error types
// ReferenceError
try {
    console.log(notDefinedVar);
} catch (error) {
    console.log('ReferenceError:', error.message);
}

// TypeError
try {
    null.toString();
} catch (error) {
    console.log('TypeError:', error.message);
}

// RangeError
try {
    const arr = new Array(-1);
} catch (error) {
    console.log('RangeError:', error.message);
}

// Asynchronous Errors
const fetchData = new Promise((resolve, reject) => {
    reject("Failed to fetch data!");
  });
  
  fetchData
    .then((data) => console.log(data))
    .catch((error) => console.log("Error:", error));  

async function fetchData() {
    try {
        const response = await Promise.reject('Failed to load data!');
        console.log(response);
    } catch (error) {
        console.log('Caught Error: ', error);
    }
}

fetchData();