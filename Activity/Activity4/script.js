let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  let taskText = input.value.trim();
  if (taskText !== "") {
    let li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="delete">❌</button>
    `;
    list.appendChild(li);
    input.value = ""; // clear input
  }
});

// ✅ Event Delegation: one listener on <ul>
list.addEventListener("click", function (event) {
  let target = event.target;

  if (target.classList.contains("delete")) {
    target.parentElement.remove(); // Delete task
  } else if (target.tagName === "SPAN") {
    target.classList.toggle("completed"); // Mark complete/incomplete
  }
});
