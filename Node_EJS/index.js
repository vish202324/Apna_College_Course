const express = require("express");
const app = express();
const port = 3000;
app.set("View engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/roll_dice", (req, res) => {
  let diceValue = Math.floor(Math.random() * 6) + 1;
  res.render("rollDice.ejs", { diceValue });
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const instaData = require("./data.json");
  const data = instaData[username];
  res.render("instagram.ejs", { data });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
