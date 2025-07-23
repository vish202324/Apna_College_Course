let ip = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
btn.addEventListener("click", function () {
  let item = document.createElement("li"); // creating li element each time hitting add task button
  item.innerText = ip.value; // set the value of the li element = value from input field
  ul.appendChild(item); // append that li element in ul element
  ip.value = "";

  // creating delete button
  let dltBtn = document.createElement("button");
  dltBtn.innerText = "Delete Task";
  dltBtn.classList.add("delete"); // for accessing the all delete buttons for remove list items
  item.appendChild(dltBtn);
});

// ✅ Event delegation on <ul>
ul.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  }
});
