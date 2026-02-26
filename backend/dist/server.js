import express, { Router } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import router from "./routes/authRoutes.js";
dotenv.config();
connectDB();
//middleware
const app = express();
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
const port = process.env.PORT || 5000;
app.use("/api/auth", router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("API running...");
});
Router;
app.listen(port, () => {
    console.log(`App is listening to port ${port}`);
});
//# sourceMappingURL=server.js.map