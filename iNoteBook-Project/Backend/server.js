const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Something Send");
});

app.listen(8000, () => {
  console.log("Server is listening on PORT 8000");
});
