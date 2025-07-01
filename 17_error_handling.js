// It's important to handle errors gracefully.
// When working with Promise or async/await, it's crucial to handle errors gracefully- especially when making network requests.

// Error handling with .catch() for Promise
// .catch() handles any error in the chain. For example, bad URL, network issue, JSON parsing.
fetch("https://jsonplaceholder.typicode.com/posts/99999")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));

// Error handling with try...catch for async/await
async function getData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.co");
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error("Something went wrong:", error);
    }
}

getData();

// Always check HTTP status code.
async function fetchPost() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!res.ok) throw new Error("HTTP error: " + res.status);
        const post = await res.json();
        console.log(post);
    } catch (err) {
        console.error("Failed to fetch post:", err.message);
    }
}

fetchPost();