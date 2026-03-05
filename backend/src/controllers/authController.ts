import type { NextFunction, Request, Response } from "express";
import type { IUser } from "../models/user.js";
import bcrypt from "bcryptjs";
import User from "../models/user.js";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

//  Register function
export const Register = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { name, email, password } = req.body as {
      name: string;
      email: string;
      password: string;
    };
    if (!name || !email || !password) {
      res.status(400).json({ message: "All fields required!" });
      return;
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "User not exists!" });
      return;
    }
    const hashedPassword: string = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(200).json({
      message: "User created successfully!",
      id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error!" });
  }
};

//  login function
export const Login = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    let { email, password }: { email: string; password: string } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "All fields required!" });
      return;
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.status(400).json({ message: "User don't exists!" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.status(400).json({ message: "Invalid Credentials!" });
      return;
    }

    const token = Jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // true in production
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({
      message: "Login Successfully!",
      id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error!" });
  }
};

//  logout function
export const Logout = (req: Request, res: Response) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.json({ message: "Logout Successfully!" });
};


  