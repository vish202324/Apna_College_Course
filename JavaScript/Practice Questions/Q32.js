//Square and sum the array elements usingthe arrow
// function and then find the average of the array.

let arr = [1, 2, 3, 4, 5];
// square of the array elements
let output = arr.map((el) => {
  return el * el;
});
console.log("Square Array:");
console.log(output);

// sum of the array element
let sum = arr.reduce((sum, el) => sum + el);
console.log("sum: " + sum);
console.log("Average: " + sum / arr.length);
