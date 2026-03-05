import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

    const Navbar = ()=>{
        const {logout, user}  = useAuth();

        return(
            <nav>
                <h3>Notes App</h3>
                <div>
                    <Link to="/notes">Notes</Link>|{" "}
                    <Link  to="/profile" >Profile</Link>|{" "}
                </div>
            </nav>
        )
    }

export default Navbar;