// JavaScript में Arrays को Compare करना थोड़ा tricky होता है
// क्योंकि Arrays एक Reference Type होते हैं। इसका मतलब है कि अगर हम दो
// Arrays को == या === से Compare करते हैं, तो यह उनके Contents की बजाय उनके
// Memory References की तुलना करता है।

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log(arr1 == arr2); // will print false because their reference(addresses) are not equal

// comaparison  method
// we can copy and assign an array with in a new array

let arr3 = arr1;
console.log(arr1 == arr3); // will give you true. because address are same.
