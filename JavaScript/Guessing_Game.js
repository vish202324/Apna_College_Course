let num = prompt("Enter a num");
let rndm = Math.floor(Math.random() * num);
let guess = prompt("Guess the Number");
while (true) {
  if (guess == "quit") {
    alert("Better Luck next time");
    break;
  }
  if (guess == rndm) {
    console.log("Congratulations you guess the correct, number was", guess);
    break;
  } else if (guess < rndm) {
    guess = prompt("you guess too small, plese try again");
  } else if (guess > rndm) {
    guess = prompt("you guess too large, plese try again");
  } else {
    alert("something went wrong");
    break;
  }
}
