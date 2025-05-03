import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import "../styles/note.css";

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "notes"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotes(data);
    });

    return () => unsub();
  }, []);

  return (
    <div className="note-list-container">
      {notes.map((note) => (
        <div className="card my-1 border-0" key={note.id}>
          <div className="card-body">
            <h4 className="card-title">{note.name} </h4>
            <p>{note.message}</p>
            <hr />
            <p className="fw-bold text-center">{note.attendance}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
