// What will be the output of the function

let object = {
  message: "Hello, world!",
  logMessage: function () {
    console.log(this.message); // this.message -> window.message
  },
};
setTimeout(object.logMessage, 2000); // undefined
const obj = {
  name: "Rahul",
  greet: function () {
    console.log(this.name);
  },
};

obj.greet(); // "Rahul"
