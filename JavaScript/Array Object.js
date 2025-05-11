const students = [
  { name: "Ravi", age: 20 }, // object 1
  { name: "Sneha", age: 21 }, // object 2
  { name: "Aman", age: 22 }, // object 3
];

// Accessing the object 1
console.log(`Name: ${students[1].name} and Age: ${students[1].age}`);

// Accessing the object 2
console.log(`Name: ${students[2].name} and Age: ${students[2].age}`);
console.log("-----Access through Loop-------");
// Accessing all objects through loop
for (let student of students) {
  console.log(`Name: ${student.name} and Age: ${student.age}`);
}


