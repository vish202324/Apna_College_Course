// Create a new input and button element on the page using JavaScript only.
// Set the text of button to "Clickme"
let body = document.querySelector("body");
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click me";
body.append(input);
body.append(button);

//Que: 2 Changing the placeholder(Attribute) value and set it to "username"
input.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");

// Que: 3 Access the Button using id "btn" and add style using classList
btn.querySelector("#btn");
btn.classList.add("btnStyle");

// Que 4: creating h1 element
let heading = document.createElement("h1");
heading.innerHTML = "<u>DOM Practice</u>";
body.append(heading);

// heading.setAttribute("id", "h1Text");
// heading.querySelector("#h1Text");
// h1Text.classList.add("h1Text");

// Que 5: create p tag with text "Apna college" set to bold
let p = document.createElement("p");
p.innerHTML = "<b>Apna College Delta Practice</b>";
body.append(p);
