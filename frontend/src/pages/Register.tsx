import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = ()=>{
    const navigate = useNavigate();


    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handelRegister = async(e:React.FormEvent)=>{
        const res = await fetch("http://localhost:5000/api/auth/register",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            credentials : "include",
            body : JSON.stringify({name,email,password})
        });
        const data = await res.json();
        if(res.ok){
            alert("Registered Successfully. Please login!");
            navigate("/");
        }else{
            alert(data.message)
        }
    }
     
    return(
        <>
        <h1>Register</h1>
        </>
    )
}
export default Register;