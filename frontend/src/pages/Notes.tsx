import { useAuth } from "../context/AuthContext";


const Notes = ()=>{
    const {logout} = useAuth();
    return(
        <>
        <h1>Notes</h1>
        </>
    )
}
export default Notes;