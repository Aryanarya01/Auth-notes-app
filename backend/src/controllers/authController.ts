import type { NextFunction, Request, Response } from "express";
import type { IUser } from "../models/user.js";
import bcrypt from "bcryptjs";
import User from "../models/user.js";
import Jwt from "jsonwebtoken";
export const Register = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    let { name, email, password }: IUser = req.body;
    if (!name || !email || !password) {
      res.status(400).json({ message: "All fields required!" });
      return;
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "User already exists!" });
      return;
    }
    const hashedPassword: string = await bcrypt.hash("password", 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res
      .status(200)
      .json({
        message: "User created successfully!",
        id: user._id,
        name: user.name,
        email: user.email,
      });
  } catch (err) {
    res.status(500).json({ message: "Server Error!" });
  }
};


export const Login = async (req:Request,res:Response,next:NextFunction):Promise<void>=>{
  try{
    let {email,password}:{email:string,password:string} = req.body;
      if(!email || !password){
        res.status(400).json({message : "All fields required!"});
        return;
      }

      const user = await User.findOne({email});
      if(!user){
        res.status(400).json({message : "User already exists!"});
        return;
      }


  }catch(err){
    res.status(500).json({message : "Server Error!"})
  }
}