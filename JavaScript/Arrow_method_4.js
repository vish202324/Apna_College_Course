// every() Method / funtion
//The every() method checks whether all elements in an array satisfy a given condition.
// If every item passes, it returns true.
// If any one item fails, it returns false.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let output = arr.every((num) => {
  return num % 2 === 0;
});

console.log(output); // false because all elements are not even
