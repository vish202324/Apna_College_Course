let count = 1;

let counter = setInterval(() => {
  console.log(count);
  count++;

  if (count > 10) {
    clearInterval(counter); // जब 10 तक पहुँच जाए तो बंद कर दो
  }
}, 1000);
