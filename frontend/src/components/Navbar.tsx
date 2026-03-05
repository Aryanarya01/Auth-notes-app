import { useAuth } from "../context/AuthContext";

    const Navbar = ()=>{
        const {logout, user}  = useAuth();

        return(
            <nav>
                
            </nav>
        )
    }

export default Navbar;