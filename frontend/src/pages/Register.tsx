import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = ()=>{
    const navigate = useNavigate();


    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handelRegister = async(e:React.FormEvent)=>{
        const res = await
    }
     
    return(
        <>
        <h1>Register</h1>
        </>
    )
}
export default Register;