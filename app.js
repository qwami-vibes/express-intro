const PORT = process.env.PORT || 5000;

const express = require("express");
const path = require("path");

const app = express();

const users = ["me", "you", "everybody"];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
