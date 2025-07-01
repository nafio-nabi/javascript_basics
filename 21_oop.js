// Object-oriented programming (OOP): a powerful way to organize and reuse code using objects, constructors, prototypes, and classes.

// Constructors (object blueprints)
// A constructor function is used to create multiple similar objects.
function Person(name, age) {
    this.name = name; /* this refers to the new object */
    this.age = age;
}

const user1 = new Person("John", 25); /* new creates a fresh object and links it to the prototype */
console.log(user1.name);

// Prototypes (shared methods)
// Each JavaScript function has a prototype property that can hold methods shared across instances.
Person.prototype.greet = function() {
    console.log(`Hello, I'm ${this.name}`);
};

user1.greet();

// Class
// A cleaner alternative to constructors and prototypes for creating objects.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
}

const user2 = new Person("Josh", 30);
console.log(user2.name);
console.log(user2.age);
user2.greet();