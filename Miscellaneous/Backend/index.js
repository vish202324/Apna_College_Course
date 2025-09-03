const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
  let { username, password } = req.query;
  res.send(`GET Response received. Welcome ", ${username}!`);
});

app.post("/register", (req, res) => {
  let { username, password } = req.body;
  res.send(`Register POST endpoint  ${username}  registered successfully`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
