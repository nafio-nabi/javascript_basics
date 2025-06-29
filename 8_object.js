// An object is a collection of key-value pairs. It is used to group related data functionality together.

// Declare an object.
let user = {
    name: "John",
    age: 25,
    isUser: true,
};

console.log(user);

// Accessing object keys/properties.
// Dot notation.
console.log(user.name);

// Bracket notation
console.log(user["age"]);

// Modifying object properties.
user.name = "Mark";
user.age = 30;
console.log(user.name);
console.log(user.age);
console.log(user);

// Adding and deleting properties.
user.country = "USA";
console.log(user.country);
console.log(user);
delete user.isUser;
console.log(user);

// Nested objects.
let player = {
    bio: {
        firstName: "Cristiano",
        lastName: "Ronaldo",
        age: 40,
    },
    clubs: {
        firstClub: "FC Porto",
        secondClub: "Manchester United",
        thirdClub: "Real Madrid",
    },
    latestStats: [30, 25, 3],
};

console.log(player.bio);
console.log(player.clubs);
console.log(player.bio.firstName);
console.log(player.clubs.secondClub);
console.log(player.latestStats[0]);

// Looping through objects.
for (let key in user) {
    console.log(key + ": " + user[key]);
}

// Object methods.
let dog = {
    name: "Rex",
    bark: function() {
        console.log("Woof!");
    }
};

dog.bark();

let cat = {
    name: "Pebble",
    meow () {
        console.log("Meow!");
    }
};
cat.meow();

let book = {
    title: "Atomic Habits",
    author: "James Clear",
    pages: 320,
};

console.log(book.title);
console.log(book.author);
console.log(book.pages);

book.pages = 321;

console.log(book.pages);

book.publisher = "Avery Publishing"
console.log(book.publisher);
console.log(book);

let student = {
    name: "Aisha",
    marks: 95,
};

console.log(student);

student.grade = "A";

console.log(student);

delete student.marks;

console.log(student);
