import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "../styles/note.css";

const NoteForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [attendance, setAttendance] = useState("Hadir");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    await addDoc(collection(db, "notes"), {
      name,
      message,
      attendance,
      createdAt: serverTimestamp(),
    });

    // Reset form
    setName("");
    setMessage("");
    setAttendance("Hadir");
  };

  return (
    <>
      <div className="card border-0 shadow">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nama
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                placeholder="Masukan nama kamu"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="ucapan" className="form-label">
                Ucapan
              </label>
              <textarea
                className="form-control"
                id="ucapan"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tulis ucapan..."
                rows={3}
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <select
                className="form-select"
                value={attendance}
                onChange={(e) => setAttendance(e.target.value)}
                aria-label="Default select example"
              >
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn btn-dark shadow-sm w-100 rounded-pill"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NoteForm;
