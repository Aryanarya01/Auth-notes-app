

import express, { Router } from "express"
import { createNote, getNotes } from "../controllers/notesController.js";
import { protect } from "../middleware/protect.js";

const router:Router = express.Router();

router.post("/",protect,createNote);
router.get("/",protect,getNotes);   
export default router;