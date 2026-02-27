import type { Request, Response } from "express";


interface AuthRequest extends Request{
    user? : any;
}


//create Note
export const createNote = async(req:AuthRequest,res:Response)=>{
    try{

    }catch(err){
        res.status(500).json({message : "Server Error!"});
    }
}