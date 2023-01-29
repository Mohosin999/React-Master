const express = require("express");
const connectDB = require("./db");

const app = express();

app.get("/", (_req, res) => {
  res.send("Something Send");
});

connectDB("mongodb://127.0.0.1:27017/iNoteBook")
  .then(() => {
    console.log("Database Connected");

    app.listen(8000, () => {
      console.log("Server is listening on PORT 8000");
    });
  })
  .catch((e) => console.log(e.message));
