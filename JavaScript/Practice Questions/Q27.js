let arr = [10, 20, 30, 40];
let count = arr.length;
let arrayAverage = (arr, count) => {
  let sum = 0;
  for (num in arr) {
    sum = sum + num;
  }
  return sum / count;
};

let result = arrayAverage(arr, count);
console.log(result);
