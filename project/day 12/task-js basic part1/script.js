var studentName = "jasmine";              
var studentAge = 19;                   
var isGraduated = false;              
console.log(studentName,studentAge,isGraduated);

let a = 10;
let b = 3;
console.log("add:", a + b);
console.log("Modulus:", a % b);
console.log("Is equal (===):", a === b);
console.log("AND:", (a > 5 && b < 5));
console.log("OR:", (a > 100 || b < 5));

let grade = 85;
if (grade >= 90) {
    console.log("Grade: A");
} else if (grade >= 75) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}
let day = 3;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    default:
        console.log("Another day");
}
//loop
for (let i = 1; i <= 5; i++) {
    console.log("For loop count:", i);
}
// while loop
let counter = 0;
while (counter < 3) {
    console.log("While loop counter:", counter);
    counter++;
}
// do...while loop
let x = 4;
do {
    console.log("value:", x);
    x++;
} while (x < 3);

//function
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("jasmine"));

// Function Expression
const multiply = function (x, y) {
    return x * y;
};
console.log("Multiply:", multiply(4, 5));
// Arrow Function
const add = (x, y) => x + y;
console.log("Add:", add(7, 2));
 //hoisting
console.log("Hoisted var (before declaration):", hoistedVar);
var hoistedVar = "I am hoisted";
console.log("Hoisted var (after declaration):", hoistedVar);
// Function declarations 
function sayHi() {
    return "Hi from a hoisted function!";
}
let hoistedLet = "I am NOT accessible before this line";
//array
let fruits = ["Apple", "Mango", "Banana"];
console.log("Fruits array:", fruits);
console.log("Type of array:", typeof fruits); 
fruits.push("Orange");         
// Objects
var user = {
    fullName: "jasmine asaad",
    age: 20,
    gender: "feMale",
    job: "frontend",
    salary: 99999999,
    married: true,
    husband: {
        fullName: " james asaad",
        age: 20,
        gender: "Female",
        son: {
            fullName: "james james",
            age: 3
        }
    },
    eat: function (meal) {
        console.log(`${this.fullName} is eating ${meal}`);
    }
};

//object 
console.log(user.fullName);          
console.log(user["job"]);           
console.log(user.husband.gender);    
user.eat("Pizza");                 

for (let key in user) {
    console.log(key, ":", user[key]);
}
