const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Tugas Administrasi Peladen</h1>");
});

app.listen(5500, () => {
  console.log("App listening on port 5500!");
});
