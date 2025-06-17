// rest- The rest operator is also written as ... as spread operator
// "rest" (समेटना) elements of an array
// ...rest का मतलब है — सब ...rest में array बनकर चला जाता है। rest collect the elements of the array
function showAll() {
  console.log(arguments);
  //built-in js object: arguments will print all the arguments even if not passed
}
showAll(10, 20, 30); // [10, 20, 30]

function addNum(...args) {
  console.log(args.reduce((sum, el) => sum + el));
}

addNum(10, 20, 30);

// De-structuring: breaking the real structure or re-building the structure
function destructuing(a, b, ...args) {
  console.log(a); // 10
  console.log(b); // 20
  console.log(args); // [30, 40] printing rest elements
}
// यहाँ a और b पहले दो arguments ले लेते हैं।
//बाकी सब ...rest में array बनकर चला जाता है।

destructuing(10, 20, 30, 40);
