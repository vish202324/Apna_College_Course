// sum the digits of a number
let number = prompt("Enter the Number");
let sum = 0;
for (let i = 0; i < number.length; i++) {
  sum = sum + parseInt(number[i]);
}
console.log(sum);
