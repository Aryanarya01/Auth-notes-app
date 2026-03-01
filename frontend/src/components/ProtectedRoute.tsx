import type { JSX } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({children}:{children : JSX.Element})=>{
    const {loading,user} = useAuth();
    if(loading){
        return <h1>Loading....</h1>
    }
    if(!user){
        return <Navigate to="/" replace />
    }
    return children;
}

export default ProtectedRoute;