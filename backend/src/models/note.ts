import mongoose, { Model } from "mongoose";
import type { INote } from "../types/types.js";

const noteSchema = new mongoose.Schema<INote>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

export const Note: Model<INote> = mongoose.model<INote>("Note", noteSchema);
