// creating counter

// let count = 1;
// let timer = setInterval(() => {
//   console.log(count);
//   count++;
//   if (count > 10) {
//     clearInterval(timer);
//   }
// }, 1000);

//Stop a function after 5 seconds
function hello() {
  console.log("This method will stop after 5 seconds");
}

let timer = setInterval(hello, 1000);
// I way to stop after 5 seconds
// setTimeout(clearInterval, 5000, timer);

// II way to stop using arrow function call back
setTimeout(() => {
  clearInterval(timer);
}, 5000);
