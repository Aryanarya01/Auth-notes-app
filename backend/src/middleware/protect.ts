import type {NextFunction, Request, Response } from "express";
import  Jwt from "jsonwebtoken";


interface AuthRequest extends Request{
    user? : any;
}
 export const protect = async(req:AuthRequest,res:Response,next:NextFunction)=>{
    try{
        const token = req.cookies.token;
        if(!token){
            res.status(401).json({message : "Not Authorized!"});
            return;
        }
        const decoded = 

    }catch(err){
        res.status(401).json({message : "Invalid token!"})
    }
 }