import { createContext, useEffect, useState } from "react"
import {type User, type AuthContextType } from "../types/AuthTypes"

const AuthContext = createContext<AuthContextType|null>(null);

const AuthProvider = ()=>{
    const [user,setUser] = useState<User|null>(null);
    const [loading,setLoading] = useState<boolean>(true);

    useEffect(()=>{
        const checkUser = async()=>{
            try{
                const res = await fetch("http://localhost:5000/api/auth/profile",{
                    credentials : "include",
                });
                if(res.ok){
                    const data = await res.json();
                    setUser(data);
                }
            }catch(err){
                console.log("Not logged in!")
            }finally{
                setLoading(false);
            }
        }
        checkUser();
    },[])
    const logout =async ()=>{
        await fetch("http://localhost:5000/api/auth/logout",{
            method : "POST",
            credentials:"include"
        })
        setUser(null)
    }
    return(
        <>
        
        </>    
    )
}

export const useAuth = ()