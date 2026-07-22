// Part 1-Choose
// map() → Array جديدة بنفس الطول
// أول عنصر يحقق الشرط → find()
// filter() → Array جديدة بالعناصر اللي حققت الشرط
// forEach() → undefined
// for...of بنستخدمها غالباً مع → Arrays

// Part 2 - True or False
//  False (بترجع array جديدة)
//  True
// undefined → True
// for...in اTrue
//  False

// Part 3 - Complete
// Q1:forEach
// Q2:filter
// Q3:find
// Q4:map

const fruits = ["Apple","Banana","Orange"];
for (const fruit of fruits) {
    console.log(fruit);
}

for (const index in fruits) {
    console.log(index);
}

fruits.forEach((fruit, index) => {
    console.log(`${index} -> ${fruit}`);
});



const sum = (a, b) => a + b;
const { name, age } = user;
console.log(`Hello ${name}`);
const arr3 = [...arr1, ...arr2];


// 1)
const names = students.map(s => s.name);
// 2)
const passed = students.filter(s => s.degree >= 60);
// 3)
const topStudent = students.find(s => s.degree > 90);
// 4)
students.forEach(s => console.log(s.name));

const numbers = [5,10,15,20];
const total = numbers.reduce((acc, num) => acc + num, 0);
console.log(total); // 50