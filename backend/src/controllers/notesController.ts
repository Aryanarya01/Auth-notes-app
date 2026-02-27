import type { Request, Response } from "express";
import { Note } from "../models/note.js";


interface AuthRequest extends Request{
    user? : any;
}


//create Note
export const createNote = async(req:AuthRequest,res:Response):Promise<void>=>{
    try{
        const {title,content} = req.body;
        const note  =await Note.create({
            title,
            content,
            user:req.user._id,
        })
        res.status(200).json(note);
    }catch(err){
        res.status(500).json({message : "Server Error!"});
    }
}

//get logged in user

