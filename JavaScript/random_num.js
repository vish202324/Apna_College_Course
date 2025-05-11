// Printing random number
let number = Math.random();
console.log(number); // this number will be between 0 to 1 not 1

// now we will print numbers between 1 to 10
console.log(number * 10); // this will increase the range numbers between 1 to 10
// we will use floor function to round off the value near to small one

console.log(Math.floor(number * 10));

// Adding 1 at the end to reach 10 because Math.random gives 9 at last so.
console.log(Math.floor(number * 10) + 1);
