import type { Request, Response } from "express";
import { Note } from "../models/note.js";

interface AuthRequest extends Request {
  user?: any;
}

//create Note
export const createNote = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const { title, content } = req.body;
    const note = await Note.create({
      title,
      content,
      user: req.user._id,
    });
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json({ message: "Server Error!" });
  }
};

//get logged in user
export const getNotes = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const notes = await Note.find({ user: req.user._id });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: "Server Error!" });
  }
};

//  update note
export const updateNote = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    let { title, content } = req.body;
    const note = await Note.findOneAndUpdate(
      { id: req.params._id, user: req.user._id },
      {
        title,
        content,
      },
      { new: true },
    );
    if (!note) {
      res.status(400).json({ message: "Note not found!" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server Error " });
  }
};
