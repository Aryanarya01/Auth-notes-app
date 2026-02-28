import { createContext, useState } from "react"
import {type User, type AuthContextType } from "../types/AuthTypes"

const AuthContext = createContext<AuthContextType|null>(null);

const AuthProvider = ()=>{
    const [user,setUser] = useState<User|null>(null);
    const [loading,setLoading] = useState(true)
    return(
         
    )
}