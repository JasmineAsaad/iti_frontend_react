let students = [
  {
    id: 1,
    name: "Mostafa Mohamed",
    age: 28,
    city: "Cairo",
    grade: 95,
    isGraduated: true,
    skills: ["HTML", "CSS", "JS"]
  },
  {
    id: 2,
    name: "Ali Hassan",
    age: 17,
    city: "Alex",
    grade: 60,
    isGraduated: false,
    skills: ["HTML"]
  },
  {
    id: 3,
    name: "Sara Ali",
    age: 24,
    city: "Mansoura",
    grade: 88,
    isGraduated: true,
    skills: ["HTML", "CSS", "JS", "React"]
  }
];
console.log("Part 1:", students.length);
console.log("Part 2:", students[0].name);
console.log("Part 3:", students[students.length - 1].name);

console.log("Part 4:");
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}

console.log("Part 5:");
for (let i = 0; i < students.length; i++) {
  console.log("Name : " + students[i].name);
  console.log("Age : " + students[i].age);
  console.log("City : " + students[i].city);
  console.log("Grade : " + students[i].grade);
}

console.log("Part 6:");
for (let i = 0; i < students.length; i++) {
  if (students[i].age > 18) {
    console.log(students[i].name);
  }
}

console.log("Part 7:");
for (let i = 0; i < students.length; i++) {
  if (students[i].grade > 90) {
    console.log(students[i].name);
  }
}

console.log("Part 8:");
for (let i = 0; i < students.length; i++) {
  if (students[i].isGraduated === true) {
    console.log(students[i]);
  }
}

console.log("Part 9:");
for (let i = 0; i < students.length; i++) {
  if (students[i].isGraduated === false) {
    console.log(students[i]);
  }
}

let totalGrades = 0;
for (let i = 0; i < students.length; i++) {
  totalGrades = totalGrades + students[i].grade;
}
console.log("Part 10:", totalGrades);


let averageGrade = totalGrades / students.length;
console.log("Part 11:", averageGrade);

let maxGrade = students[0].grade;
for (let i = 1; i < students.length; i++) {
  if (students[i].grade > maxGrade) {
    maxGrade = students[i].grade;
  }
}
console.log("Part 12:", maxGrade);


let minGrade = students[0].grade;
for (let i = 1; i < students.length; i++) {
  if (students[i].grade < minGrade) {
    minGrade = students[i].grade;
  }
}
console.log("Part 13:", minGrade);


let namesForSort = [];
for (let i = 0; i < students.length; i++) {
  namesForSort.push(students[i].name);
}
namesForSort.sort();
console.log("Part 14:", namesForSort);

// ---------- Part 15: names reversed ----------
let namesForReverse = [];
for (let i = 0; i < students.length; i++) {
  namesForReverse.push(students[i].name);
}
namesForReverse.reverse();
console.log("Part 15:", namesForReverse);

console.log("Part 16:");
for (let i = 0; i < students.length; i++) {
  let studentName = students[i].name;
  console.log(studentName + " letters: " + studentName.length);
  console.log("First letter: " + studentName[0]);
  console.log("Last letter: " + studentName[studentName.length - 1]);
}

console.log("Part 17:");
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name.toUpperCase());
}


console.log("Part 18:");
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name.toLowerCase());
}

console.log("Part 19:");
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name + " ; " + students[i].name.includes("Ali"));
}

console.log("Part 20:");
let splitNames = [];
for (let i = 0; i < students.length; i++) {
  let parts = students[i].name.split(" ");
  splitNames.push(parts);
  console.log(parts);
}

console.log("Part 21:");
for (let i = 0; i < splitNames.length; i++) {
  console.log(splitNames[i].join(" "));
}

console.log("Part 23:");
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name + " :" + students[i].skills.length);
}

console.log("Part 24:");
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name + ":", students[i].skills);
}

students[0].skills.push("sql");
console.log("Part 25:", students[0].skills);

students[0].skills.pop();
console.log("Part 26:", students[0].skills);

console.log("Part 27:");
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name + ":" + students[i].skills.includes("JS"));
}

console.log("Part 28:");
for (let i = 0; i < students.length; i++) {
  let reversedSkills = students[i].skills.reverse();
  console.log(students[i].name + ":", reversedSkills);
}

console.log("Part 29:");
for (let i = 0; i < students.length; i++) {
  let sortedSkills = students[i].skills.sort();
  console.log(students[i].name + ":", sortedSkills);
}

console.log("Part 30:");
for (let i = 0; i < students.length; i++) {
  console.log(students[i].skills.toString());
}

console.log("Part 31:", Object.keys(students[0]));

console.log("Part 32:", Object.values(students[0]));

students[0].country = "Egypt";
console.log("Part 34:", students[0]);

students[0].city = "Giza";
console.log("Part 35:", students[0].city);

delete students[0].country;
console.log("Part 36:", students[0]);
//
console.log("Part 38:");
for (let i = 0; i < students.length; i++) {
  let grade = students[i].grade;
  let result = "";
  if (grade >= 90) {
    result = "Excellent";
  } else if (grade >= 80) {
    result = "Very Good";
  } else if (grade >= 70) {
    result = "Good";
  } else if (grade >= 60) {
    result = "Pass";
  } else {
    result = "Failed";
  }
  console.log(students[i].name + " ;" + result);
}

console.log("Part 39:");
for (let i = 0; i < students.length; i++) {
  if (students[i].age < 18) {
    console.log(students[i].name + " -> Minor");
  } else {
    console.log(students[i].name + " -> Adult");
  }
}

function getName(student) {
  return student.name;
}
console.log("Part 40:", getName(students[0]));

function getAge(student) {
  return student.age;
}
console.log("Part 41:", getAge(students[0]));

function isPassed(student) {
  if (student.grade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log("Part 42:", isPassed(students[1]));

function getSkillsCount(student) {
  return student.skills.length;
}
console.log("Part 43:", getSkillsCount(students[2]));

function getAverageGrade(studentsList) {
  let sum = 0;
  let i = 0;
  while (i < studentsList.length) {
    sum = sum + studentsList[i].grade;
    i++;
  }
  return sum / studentsList.length;
}
console.log("Part 44:", getAverageGrade(students));
