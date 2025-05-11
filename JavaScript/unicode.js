//JavaScript में जब हम Strings को == या === से Compare करते हैं,
// तो उनके Unicode Code Points की तुलना होती है।
// refer unicode sheet for more info
console.log("a" > "A"); // true (Lowercase letters का Unicode ज़्यादा होता है)
console.log("apple" < "banana"); // true ("a" का Unicode "b" से छोटा है)
console.log("Zebra" > "apple"); // false ("Z" का Unicode "a" से छोटा है)
console.log("😊" > "😂"); // true (Different Unicode Code Points)
