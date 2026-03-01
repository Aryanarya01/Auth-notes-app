import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handelLogin  =async (e:React.FormEvent)=>{
        e.preventDefault();
        const res = await fetch("http://localhost:5000/api/auth/login",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            credentials : "include",
            body : JSON.stringify({email,password}),
        })
    }
    return(
        <>
         
        </>
    )
}
export default Login;