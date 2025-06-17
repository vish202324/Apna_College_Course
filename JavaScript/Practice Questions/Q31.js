// Que: Create a function to find minimum in an array.
// min - accumulator
// el - currentValue from Array

function getMin(arr) {
  let min = arr.reduce((min, el) => {
    if (min < el) {
      return min;
    } else {
      return el;
    }
  });
  return min;
}

let arr = [10, 20, 30, 40, 14, 9, 23, 50];
let output = getMin(arr);
console.log(output);
