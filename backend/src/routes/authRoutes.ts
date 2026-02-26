import { Register,Login } from "../controllers/authController.js";
import { Router } from "express";
const router = Router();

router.post("/register",Register);
router.post("/login",Login)