let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  // updating h3 heading text with rgb value
  let h2 = document.querySelector("h2");

  let randomColor = getRandomColor(); // calling method to get the color
  h2.innerText = randomColor;
  console.log("Color Updated");

  // Changing bg color of div
  let div = document.querySelector("div");
  div.style.backgroundColor = randomColor;
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`; //
  return color; // return in this format (255, 255, 255)
}
