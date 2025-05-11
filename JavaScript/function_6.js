// High order Function
// A function which accepts another function as an argument OR
// returns another function is called a Higher-Order Function.

function higherOrder(func, count) {
  // func is a function passed as an argument
  for (let i = 1; i <= count; i++) {
    func(); // calling the function
  }
}

let sayHello = function () {
  console.log("Hello World!");
};

higherOrder(sayHello, 5); // Output: Hello World!
