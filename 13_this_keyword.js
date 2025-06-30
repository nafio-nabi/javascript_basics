// this keyword refers to the object that is currently executing the function.
// But it's value depends on how the function is called- not where it's written.

// Global scope

// In a browser, this refers to the window object.
console.log(this);

// In a regular function.
// If called normally, this refers to the global object (window in browsers).
// In strict mode, this is undefined.
function show() {
    console.log(this);
}

// show();

// Inside an object.
// this refers to the object the method belongs to.
const user = {
    name: "John",
    greet: function () {
        console.log(this.name);
    }
};

user.greet();

// Arrow functions.
// Arrow functions don't get their own this. They use this from their surrounding (lexical) scope.
const userOne = {
    name: "John",
    greet: () => {
        console.log(this.name);
    }
};

userOne.greet();

// Event handlers.
// this refers to the button element itself.
{/* <button onClick="console.log(this)">Click me</button> */}

const person = {
    name: "John",
    sayHi() {
        console.log("Hi, I'm " + this.name);
    }
};

const say = person.sayHi;
say();
person.sayHi();