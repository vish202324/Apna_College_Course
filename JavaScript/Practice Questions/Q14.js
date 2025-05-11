let num = prompt("Enter a number");
let fact = 1;
if (num == 1 || num == 0) {
  console.log(`Factorial of 1 is 1`);
} else {
  for (i = num; i >= 1; i--) {
    fact = fact * i;
  }
  console.log(`Factorial of ${num} is ${fact}`);
}
