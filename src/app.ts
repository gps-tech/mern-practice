import "dotenv/config";
import express from "express";
import NoteModel from "./models/note";

const app = express();

//endpoint for http GET request
app.get("/", async (req, res) => {
  try {
    throw Error("DAMN");
    //get from database
    const notes = await NoteModel.find().exec();
    //return to user
    res.status(200).json(notes);
  } catch (error) {
    console.error(error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) errorMessage = error.message;
    res.status(500).json({ error: errorMessage });
  }
});

export default app;
