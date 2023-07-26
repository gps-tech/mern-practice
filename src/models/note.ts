import { InferSchemaType, model, Schema } from "mongoose";

//creates a schema for our notes, each with a title, text, and timestamp
const noteSchema = new Schema(
  {
    title: { type: String, required: true },
    text: { type: String },
  },
  { timestamps: true }
);

//create type for typescript
type Note = InferSchemaType<typeof noteSchema>;

//export model to use in our code
export default model<Note>("Note", noteSchema);
