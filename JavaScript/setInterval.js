// setInterval() एक ऐसा JS function है जो किसी function को बार-बार चलाता है
// एक fixed interval (delay) के साथ, जब तक कि आप उसे रोक न दो।
// Syntax: setInterval(function, delay_in_milliseconds);
// setInterval(() => {
//   console.log("Running every 2 seconds");
// }, 20000);

let timer = setInterval(() => {
  console.log("This will stop after 5 seconds");
}, 1000);

// 5 sec बाद बंद कर देंगे
setTimeout(() => {
  clearInterval(timer);
}, 5000);
