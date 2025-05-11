// Qs1. Write a JavaScript function that returns
// array elements larger than a given number.
let arr = [2, 8, 1, 9, 11, 5, 12];
let num = 5;

function large_ele(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      console.log(arr[i]);
    }
  }
}

large_ele(arr, num);
