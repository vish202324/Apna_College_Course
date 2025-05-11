// filter() Method / funtion
//The filter() method is used to select elements from an array that meet a condition.
// It returns a new array with only those elements that pass the test.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let new_arr = arr.filter((num) => {
  return num % 2 === 0;
});

console.log(new_arr);

// Filter Students with Marks > 80(more than 80)
let students = [
  { name: "Ravi", marks: 85 },
  { name: "Sita", marks: 72 },
  { name: "Aman", marks: 91 },
];

let toppers = students
  .filter((student) => student.marks > 80) // this will give you two objects with their marks:[{ name: 'Ravi', marks: 85 }, { name: 'Aman', marks: 91 }]
  .map((student) => student.name); // here it will generate only name of those toppers.
console.log(toppers);
// पहले हमने filter() से 80 से ज़्यादा marks वाले students निकाले, फिर map() से उनके नाम अलग किए।
