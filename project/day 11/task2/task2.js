var name = "Ahmed";
var grade = 85;
var isPassed = true;
var subjects = ["Math", "Science", "English"];
var studentInfo = { name: "Ahmed", age: 20 };
var nothing = null;
var notDefined;

if (grade >= 90) {
  console.log(`${name}'s grade is ${grade}: Excellent`);
} else if (grade >= 80) {
  console.log(`${name}'s grade is ${grade}: Good`);
} else if (grade >= 70) {
  console.log(`${name}'s grade is ${grade}: Average`);
} else if (grade >= 60) {
  console.log(`${name}'s grade is ${grade}: Pass`);
} else {
  console.log(`${name}'s grade is ${grade}: Fail`);
}