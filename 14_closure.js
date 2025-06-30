// A closure is created when a function remembers and accesses variables from its outer scope, even after that outer function has finished executing.

// Basic closure example.
function outer() {
    let message = "Hello";

    // Closure.
    function inner() {
        console.log(message);
    }

    return inner;
}

const greet = outer();
greet();

// Closures keep access to outer variables.
function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    }
}

const inc = counter();
inc();
inc();

function buildCounter() {
    let count = 100;

    return function () {
        count += 10;
        console.log(count);
    };
}

const counterA = buildCounter();
counterA();
counterA();