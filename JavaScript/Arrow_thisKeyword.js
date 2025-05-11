// Revise: JS Part 7 "this with Arrow function"
const student1 = {
  name: "vivek",
  age: 26,
  getName: function () {
    console.log(this);
    return this.name; // global scope->
  },
  getAge: () => {
    console.log(this);
    return this.age; // parent scope -> window
  },
  getinfo1: function () {
    setTimeout(() => {
      console.log(this); // student
    }, 2000);
  },

  getinfo2: function () {
    setTimeout(function () {
      console.log(this); // window
    }, 2000);
  },
};
