const person = {
    name: 'John',
    age: 30,
    isStudent: false,
    hobbies: ['reading', 'sports'],
    greet: function () {
        console.log('Hello, ' + this.name);
    },
};

console.log(person);

// Creating an object
// Object literal
const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2022,
};

console.log(car);

// Using new Object()
const car = new Object();
car.brand = 'Toyota';
car.model = 'Corolla';
car.year = 2022;

console.log(car);

// Using contructor functions
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

const car1 = new Car('Toyota', 'Camry', 2023);
const car2 = new Car('Honda', 'Civic', 2024);

console.log(car1, car2);

// Accessing object properties
// Dot notation
const person = {
    name: 'Alice',
    age: 25,
};

console.log(person.name);
console.log(person.age);

// Bracker notation
const person = {
    "full name": 'Alice Harper',
    age: 25,
};

const key = 'full name';

console.log(person[key]);

// Adding and updating properties
const person = {};
console.log(person);

person.name = 'Alice'
person.age = 25;

console.log(person);
console.log(person.name);
console.log(person.age);

// Deleting properties
const person = {
    name: 'Alice',
    age: 25,
    isStudent: true,
};

console.log(person);

delete person.isStudent;

console.log(person);

// Checking for property existence
const person = { name: 'Alice' };
console.log('name' in person);
console.log('age' in person);

console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('age'));

// Iterating through object properties
const person = {
    name: 'John',
    age: 30,
    isStudent: false,
    hobbies: ['reading', 'sports'],
    greet: function () {
        console.log('Hello, ' + this.name);
    },
};

// for in
for (let key in person) {
    console.log(key, ':', person[key]);
}

// Object.keys()
const keys = Object.keys(person);
console.log(keys);

// Object.values()
const values = Object.values(person);
console.log(values);

// Object.entries()
const entries = Object.entries(person);
console.log(entries);

// Copying objects
// manual copy
const person = {
    name: 'John',
    age: 30,
    isStudent: false,
    hobbies: ['reading', 'sports'],
    greet: function () {
        console.log('Hello, ' + this.name);
    },
};
const copy = {};

console.log(person);
console.log(copy)

for (let key in person) {
    copy[key] = person[key];
}

console.log(person);
console.log(copy);

// Object.assign()
const person = {
    name: 'John',
    age: 30,
    isStudent: false,
    hobbies: ['reading', 'sports'],
    greet: function () {
        console.log('Hello, ' + this.name);
    },
};

const copy = Object.assign({}, person);
console.log(copy);

// Spread Operator
const person = {
    name: 'John',
    age: 30,
    isStudent: false,
    hobbies: ['reading', 'sports'],
    greet: function () {
        console.log('Hello, ' + this.name);
    },
};

const copy = { ...person };
console.log(copy);

// Merging objects
const obj1 = { name: 'Alice' };
const obj2 = { age: 25 };

const merged = Object.assign({}, obj1, obj2);
console.log(merged);

const merged2 = { ...obj1, ...obj2 };
console.log(merged2);

// Working with nested objects
// Accessing nested properties
const person = {
    name: 'Alice',
    address: { city: 'New York', zip: '10001' },
};

console.log(person.address.city);
console.log(person['address']['zip']);
console.log(person.address.city);
console.log(person.contact?.phone);

// Freezing objects
const obj = { name: 'Alice' };
Object.freeze(obj);

obj.name = 'Bob'
obj.name = 25;
console.log(obj);

// Sealing objects
const obj = { name: 'Alice' };
Object.seal(obj);

obj.name = 'Bob'
obj.age = 25;
delete obj.name;
console.log(obj);

// Object methods
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};

console.log(calculator.add(1, 1));
console.log(calculator.subtract(2, 1));