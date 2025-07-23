let button = document.querySelector("button");
let page = document.querySelector("body");
let p = document.querySelector("span");
button.addEventListener("click", function () {
  let randomColor = getRandomColor();
  page.style.backgroundColor = randomColor;
  p.innerText = randomColor;
  console.log(randomColor);
});

// function for generating colors in rgb value
function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}
