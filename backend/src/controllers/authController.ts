import type { NextFunction, Request, Response } from "express";
import type { IUser } from "../models/user.js";


export const Register =async (req:Request,res:Response,next:NextFunction) =>{
    try{
        let {name, email, password}: IUser
    }catch(err){
        res.status(500).json({message : "Server Error!"})
    }
}