// reduce() Method / funtion
let arr = [1, 2, 32, 4, 15, 62, 17, -8, 9, 10];
let sum = arr.reduce((acc, el) => acc + el, 0);

console.log(sum); // false because all elements are not even
// Finding max in an array
max = arr[1];
console.log("Finding max in an array");
let ans = arr.reduce((max, el) => {
  if (el > max) return el;
  else return max;
});
console.log(ans);
