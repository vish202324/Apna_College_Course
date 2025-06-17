// spread- The spread operator is written as ... and is used to
// "spread" (फैलाना) elements of an array
// ...arr का मतलब है — arr के सारे elements को अलग-अलग कर देना।

let arr = [1, 2, 32, 4, 15, 62, 17, -8, 9, 10];
console.log(...arr); // Output: 5 1 2 32 4 15 62 17 -8 9 10
console.log(arr); // [1, 2, 32, 4, 15, 62, 17, -8, 9, 10]

// spreading the "String"
console.log(..."Hello"); // H e l l o

// function arguments
function sum(a, b, c) {
  return a + b + c;
}

let nums = [5, 10, 15];
console.log(sum(...nums));
// sum(...nums) is like -> sum(5, 10, 15)
// Output: 30

// Copying Array
let newArr = [...arr];
console.log(newArr);

// Spread with Objects
let data = {
  email: "abc@gmail.com",
  name: "vivek",
};
// copying object data and adding new key:value pair
let newData = { ...data, id: 123 };
console.log(newData);
