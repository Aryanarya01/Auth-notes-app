import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handelLogin  =async (e:React.FormEvent)=>{
        e.preventDefault();
        
    }
    return(
        <>
         
        </>
    )
}
export default Login;