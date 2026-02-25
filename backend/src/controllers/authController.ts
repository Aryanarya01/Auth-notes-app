import type { NextFunction, Request, Response } from "express";
import type { IUser } from "../models/user.js";
import bcrypt from "bcryptjs";
import User from "../models/user.js";

export const Register =async (req:Request,res:Response,next:NextFunction) =>{
    try{
        let {name, email, password}: IUser = req.body;
        if(!name || !email || !password){
            res.status(400).json({message : "All fields required!"});
            return;
        }
        const existingUser = await User.findOne({email});
        if(existingUser){
            res.status(400).json({message : "User already exists!"});
            return;
        }
        const hashedPassword :string = await bcrypt.hash("password",10);

        const user = 
    }catch(err){
        res.status(500).json({message : "Server Error!"})
    }
}