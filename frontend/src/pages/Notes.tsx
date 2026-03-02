import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {type Note } from "../types/NoteTypes";


const Notes = ()=>{
    const {logout} = useAuth();
    const [notes,setNotes] = useState<Note[]>([]);
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");

    //fetch notes
    const fetchNotes = async()=>{
        const res = await fetch("http://localhost:5000/api/notes",{
            credentials : "include"
        });
        if(res.ok){
            const data = await res.json();
            setNotes(data);
        }
    }

    useEffect(()=>{
        fetchNotes();
    },[])

    //create notes
    const handelCreate = async(e : React.FormEvent)=>{
        const res =await fetch("http://localhost:5000/api/notes",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            credentials : "include",
            body : JSON.stringify({title,content})
        })
        if(res.ok){
            setTitle("");
            setContent("");
            fetchNotes()//refresh list
        }
    }
    return(
        <>
        <h1>Notes</h1>
        </>
    )
}
export default Notes;