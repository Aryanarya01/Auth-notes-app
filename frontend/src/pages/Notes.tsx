import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { type Note } from "../types/NoteTypes";

const Notes = () => {
  const { logout } = useAuth();
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId,setEditingId] = useState<string|null>(null)

  //fetch notes
  const fetchNotes = async () => {
    const res = await fetch("http://localhost:5000/api/notes", {
      credentials: "include",
    });
    if (res.ok) {
      const data = await res.json();
      setNotes(data);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  //create notes
  // const handelCreate = async (e: React.FormEvent) => {
  //   const res = await fetch("http://localhost:5000/api/notes", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     credentials: "include",
  //     body: JSON.stringify({ title, content }),
  //   });
  //   if (res.ok) {
  //     setTitle("");
  //     setContent("");
  //     fetchNotes(); //refresh list
  //   }
  // };

  //delete note
  const handelDelete = async (id: string) => {
    const res = await fetch(`http://localhost:5000/api/notes/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
      console.log("Status:", res.status);

  const data = await res.json();
  console.log("Response:", data);
    if(res.ok){
        setNotes((prev)=>prev.filter((note)=>note._id !== id))
    }
  };

  const handelEdit =async (e:React.FormEvent)=>{
    e.preventDefault();

    if(editingId){
        //update
        const res = await fetch(`http://localhost:5000/api/notes/${editingId}`,{
          method : "PUT",
          credentials : "include",
          headers : {
            "Content-Type" : "application/json",
          },
          body : JSON.stringify({title,content})
        });
        if(res.ok){
          const updatedNote = await res.json();

          setNotes((prev)=>prev.map((note)=>note._id === editingId ? updatedNote : note))
          setEditingId(null);
          setTitle("");
          setContent("")
        }
    }else{
      
    }
  }

  return (
    <>
      <h1>My Notes...</h1>
      <button onClick={logout}>Logout</button>
      <form onSubmit={handelCreate}>
        <input
          type="text"
          placeholder="Enter Title.."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Content.."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add Note..</button>
      </form>
      <hr />

      {notes.map((note) => (
        <div key={note._id}>
          <h4>{note.title}</h4>
          <h4>{note.content}</h4>
          <button onClick={() => handelDelete(note._id)}>Delete</button>
          <hr />
        </div>
      ))}
    </>
  );
};
export default Notes;
