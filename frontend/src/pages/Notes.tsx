import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Note } from "../types/NoteTypes";


const Notes = ()=>{
    const {logout} = useAuth();
    const [notes,setNotes] = useState<Note[]>([]);
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    return(
        <>
        <h1>Notes</h1>
        </>
    )
}
export default Notes;