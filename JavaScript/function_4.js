let greet = "hello from global"; // global variable

function changeGreet() {
  let greet = "namaste";
  console.log(greet, "from Outer Func");
  innerGreet();
  function innerGreet() {
    console.log(greet, "from Inner Func");
  }
}

console.log(greet);
changeGreet();
// innerGreet();
