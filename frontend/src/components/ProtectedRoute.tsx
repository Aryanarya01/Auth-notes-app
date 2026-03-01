import type { JSX } from "react";
import { useAuth } from "../context/AuthContext";


const ProtectedRoute = ({children}:{children : JSX.Element})=>{
    const {loading,user} = useAuth();
    
    return children;
}

export default ProtectedRoute;