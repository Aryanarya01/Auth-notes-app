import express, { Router } from "express";
import { createNote, getNotes, updateNote } from "../controllers/notesController.js";
import { protect } from "../middleware/protect.js";
const router = express.Router();
router.post("/", protect, createNote);
router.get("/", protect, getNotes);
router.put("/:id", protect, updateNote);
export default router;
//# sourceMappingURL=noteRoutes.js.map