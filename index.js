const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

const PORT = process.env.PORT || 5000;
app.listen(3000, function() {
  console.log("I am listening in 3000");
});
