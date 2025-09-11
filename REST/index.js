const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    username: "john_doe",
    content: "Hello, this is my first post!",
  },

  {
    username: "jane_smith",
    content: "Excited to join this platform!",
  },

  {
    username: "Vivek_Kumar",
    content: "Selelcted for my first job!",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
