import { Register, Login, Logout } from "../controllers/authController.js";
import { Router } from "express";
import { protect } from "../middleware/protect.js";
const router = Router();
router.post("/register", Register);
router.post("/login", Login);
router.get("/profile", protect, (req, res) => {
    res.json(req.user);
});
router.post("/logout", Logout);
export default router;
//# sourceMappingURL=authRoutes.js.map