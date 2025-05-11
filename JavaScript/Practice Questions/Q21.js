// Qs5. Write a JavaScript function to generate a random number
// within a range (start, end).

let start = parseInt(prompt("Enter the start number"));
let end = parseInt(prompt("Enter the end number"));

// Make sure start is less than or equal to end
if (start > end) {
  [start, end] = [end, start]; // swap
}

let number = Math.floor(Math.random() * (end - start + 1)) + start;
console.log("Random number:", number);
