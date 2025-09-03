function Students(name) {
  this.name = name;
}

Students.prototype.hello = function () {
  console.log("Hello " + this.name);
};

let s1 = new Students("John");
let s2 = new Students("Doe");
s1.hello();
s2.hello();
let str = "Vivek";

console.log(str.toUpperCase());
console.log(str.__proto__ === String.prototype); // true
// Output: VIVEK
