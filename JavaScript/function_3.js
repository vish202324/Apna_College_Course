// Scope in Funciton
let sum = 54; // global scope
function calcSum(a, b) {
  let sum = a + b; // function scope
  console.log(sum); // this "sum" variable has scope inside the function only
}

// calling function
calcSum(1, 2);

console.log(sum); // 54 coming from the global variable(sum)
