// forEach Method
let arr = [1, 2, 3, 4];

// Normal Function
let print = function (el) {
  console.log(el);
};

// Arrow function
let print1 = (el) => {
  console.log(el);
};
arr.forEach(print); // calling normal function
arr.forEach(print1); // calling arrow function

// arr.forEach(print) हर array item को लेकर print() function को call करता है।

let arr1 = [
  { name: "vivek", marks: 90 }, // object 1
  { name: "shivam", marks: 98 }, // object 2
  { name: "kishor", marks: 75 }, // objetct 3
];

arr1.forEach(function (student) {
  console.log(student.name);
  // forEach() हर बार array से एक object उठाता है और उसे student parameter में डाल देता है।
});

arr1.forEach((student) => {
  console.log(`${student.name} scored ${student.marks}`);
});
