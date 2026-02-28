import express, { Router } from "express";
import { createNote, deleteNote, getNotes, updateNote, } from "../controllers/notesController.js";
import { protect } from "../middleware/protect.js";
const router = express.Router();
router.post("/", protect, createNote);
router.get("/", protect, getNotes);
router.put("/:id", protect, updateNote);
router.delete("/:id", protect, deleteNote);
export default router;
//# sourceMappingURL=noteRoutes.js.map