import express from "express";
const app = express();
const port = 5001;

//endpoint for http GET request
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log("Server running on port: " + port);
});
