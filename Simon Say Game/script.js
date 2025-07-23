let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"]; // all buttons array index range 0 to 3
let started = false;
let level = 0;

let h3 = document.querySelector("h3");

// This Event will detect that whether a key is pressed or not.
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game start");
    // to prevent game start again and again at every button we want that game start when button press at first
    // so we will change the state of started variable from false to true
    started = true;

    levelUp(); // we are calling levelup here to update when we press any button
  }
});

function gameFlash(btn) {
  btn.classList.add("flash"); // this will apply the 'flash' on the button
  setTimeout(function () {
    btn.classList.remove("flash"); // this method will remove the 'flash' class after 1 sec
  }, 250); // this is how we are getting button flash effect
}

// userFlash Function
function userFlash(btn) {
  btn.classList.add("userflash"); // this will apply the 'flash' on the button
  setTimeout(function () {
    btn.classList.remove("userflash"); // this method will remove the 'flash' class after 1 sec
  }, 250); // this is how we are getting button flash effect
}
function levelUp() {
  level++;
  userSeq = [];
  h3.innerText = `Level: ${level}`;

  // Choosing random button to flash it
  let rndId = Math.floor(Math.random() * 3); // this will give a random no. between 0 to 3
  let rndColor = btns[rndId]; // this will give the random color i mean button class from array: red, green etc.
  let rndBtn = document.querySelector(`.${rndColor}`); // from here we accessing that button through class getting from 'rndColor'
  // commented lines are not important. can be uncomment for understanding
  // console.log(
  //   "Index",
  //   rndId,
  //   ", Random Color: ",
  //   rndColor,
  //   ",Random Button: ",
  //   rndBtn
  // );
  gameSeq.push(rndColor); // the random color will be added in game seq array.
  console.log(gameSeq);
  gameFlash(rndBtn); // calling btnFlash Method with 'class name' of button to flash 'that class name' button when game start / so on
}

// Answer Check Function
function checkAns(idx) {
  // console.log("current level: ", `${level}`);
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h3.innerHTML = `Game Over!! Your score was: <b>${level}</b>.<br>Press Any Key to Start Again.`;
    console.log(h3.innerText);
    // when game over background color red
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 250); // after 150ms reset to background white
    reset(); // when games over to start again we have to reset everthing. so we called reset func
  }
}
// user Button pressed function
function btnPress() {
  //console.log(this);
  let btn = this; // this will return the object of the pressed button (like: red, green etc.)
  userFlash(btn); // when user press the button btnFlash method called for pressed button and that button will flashed
  userColor = btn.getAttribute("id"); // from here we are getting id(which is nothing but a color) of the pressed button by user
  // console.log(userColor);
  userSeq.push(userColor); // now that color will store in userSeq array

  checkAns(userSeq.length - 1); // means user ne jo last color enter kiya hai usi Index value ko game seq se check karenge
}

// event listener for pressed buttons
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress); // when button click this eventListner will call the btnPress function
}

// Game Reset Function
function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
