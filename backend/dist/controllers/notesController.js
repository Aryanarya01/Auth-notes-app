import { Note } from "../models/note.js";
//create Note
export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const note = await Note.create({
            title,
            content,
            user: req.user._id,
        });
        res.status(200).json(note);
    }
    catch (err) {
        res.status(500).json({ message: "Server Error!" });
    }
};
//get logged in user
export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user._id });
        res.json(notes);
    }
    catch (err) {
        res.status(500).json({ message: "Server Error!" });
    }
};
//  update note
export const updateNote = async (req, res) => {
    try {
        let { title, content } = req.body;
        const note = await Note.findOneAndUpdate({ id: req.params._id, user: req.user._id }, {
            title,
            content,
        }, { new: true });
        if (!note) {
            res.status(400).json({ message: "Note not found!" });
            return;
        }
    }
    catch (err) {
        res.status(500).json({ message: "Server Error " });
    }
};
// delete note function
export const deleteNote = async (req, res) => {
    try {
        const note = await Note.findOneAndDelete({
            _id: req.params.id,
            user: req.user._id,
        });
        if (!note) {
            res.status(400).json({ message: "Note not found!" });
            return;
        }
    }
    catch (err) {
        res.status(500).json({ message: "Server Error!" });
    }
};
//# sourceMappingURL=notesController.js.map