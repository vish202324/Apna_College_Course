let todo = [];
let req = prompt("Enter your request");
while (true) {
  if (req == "quit") {
    console.log("Your are exiting...");
    break;
  }

  if (req == "list") {
    console.log("------------------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("------------------");
  } else if (req == "add") {
    task = prompt("Enter the task to add");
    todo.push(task);
    console.log("task added..");
  }

  if (req == "delete") {
    indx = prompt("Enter the index of the element");
    todo.splice(indx, 1); // this method will remove 1 element of the given index
    console.log("Element deleted!");
  }
  req = prompt("Enter your request");
}
