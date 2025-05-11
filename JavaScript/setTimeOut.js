// syntax
// setTimeout(function, delay_in_milliseconds, arguments value(if required));

console.log("Outside the Function");

// Normal function
function greet(name) {
  console.log("function called by", name);
}

// Arrow function
const hello = (name) => {
  console.log("Hello by", name);
};
setTimeout(hello, 4000, "vivek");
