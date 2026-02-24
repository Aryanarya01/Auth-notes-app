import express from "express";
const app = express();
const port = 5000;

app.get("/",(req,res)=>{
    res.send("working");
})
app.listen(port,()=>{
    console.log(`App is listening to port ${port}`);
})