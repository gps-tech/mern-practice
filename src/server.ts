import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
const app = express();

//endpoint for http GET request
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING!)
  .then(() => {
    console.log("Mongoose connected");
    app.listen(port, () => {
      console.log("Server running on port: " + port);
    });
  })
  .catch(console.error);
