const firstName = 'Mark';
console.log(firstName)

const lastName = 'Zuckerberg';
console.log(lastName);

// lastName = 'Zuck';
// console.log(lastName);

let age = 40;
console.log(age);

age = 41;
console.log(age);

let height = 1.71;
console.log(height);

const isProgrammer = true;
console.log(isProgrammer);

const isMITAlumni = false;
console.log(isMITAlumni);

let nextCompany;
console.log(nextCompany);

let signature = null;
console.log(signature);

function testScope() {
    const companyFounded = 'Facebook';
    console.log(firstName);
    console.log(companyFounded);
}

testScope();
console.log(companyFounded);