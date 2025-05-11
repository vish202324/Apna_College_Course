let hello = setInterval(() => {
  console.log("hello");
}, 2000);

setTimeout(() => {
  clearInterval(hello);
}, 10000);
