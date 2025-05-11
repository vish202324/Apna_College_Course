// Write a JS function to count vowels in a String

let vowels = ["a", "e", "i", "o", "u"];
let strng = "orange";
let count = 0;

// Through nested loop
// for (let i = 0; i < strng.length; i++) {
//   for (let j = 0; j < vowels.length; j++) {
//     if (strng[i] == vowels[j]) {
//       count++;
//     }
//   }
// }

// Advance version
// for (let i = 0; i < strng.length; i++) {
//   if (vowels.includes(strng[i])) {
//     count++;
//   }
// }

for (let char of strng) {
  if (vowels.includes(char.toLowerCase())) {
    count++;
  }
}
console.log(`No. of Vowels in String "${strng}" are ${count}`);
