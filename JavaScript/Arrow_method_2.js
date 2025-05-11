// map Method / funtion
//.map() एक array method है जो original array को बदले बिना एक नया array (return)बनाता है।
let arr = [1, 2, 3, 4];

// Normal Function
let double = arr.map((el) => {
  return el * 2;
});

console.log(double);

let squares = arr.map(function (num) {
  return num * num;
});
console.log("Square of the Array");
console.log(squares); // [1, 4, 9, 16]

// converting marks in gpa by dividing by 10

let arr1 = [
  { name: "vivek", marks: 90 },
  { name: "shivam", marks: 98 },
  { name: "kishor", marks: 75 },
];

let names = arr1.map((student) => student.marks / 10);

console.log(names); // ["vivek", "shivam", "kishor"]
