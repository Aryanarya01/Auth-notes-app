import { createContext, useEffect, useState } from "react"
import {type User, type AuthContextType } from "../types/AuthTypes"

const AuthContext = createContext<AuthContextType|null>(null);

const AuthProvider = ()=>{
    const [user,setUser] = useState<User|null>(null);
    const [loading,setLoading] = useState<boolean>(true);

    useEffect(()=>{
        const checkUser = async()=>{
            try{

            }catch(err){
                console.log("Not logged in!")
            }finally
        }
    },[])

    return(
        <>
        
        </>    
    )
}