import express, { Router } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import {connectDB} from "./config/db.js"
import router from "./routes/authRoutes.js";

 
 
const port = process.env.PORT || 5000;
//middleware
const app = express();
dotenv.config();
connectDB();
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth",router)
app.use(cookieParser());


app.get("/", (req, res) => {
  res.send("API running...");
});

app.listen(port,()=>{
    console.log(`App is listening to port ${port}`);
})