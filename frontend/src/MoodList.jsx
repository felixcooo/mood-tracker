import { useState } from "react";

export default function MoodList({ moods, deleteMood, updateMood }) {
  const [editingId, setEditingId] = useState(null);
  const [editMood, setEditMood] = useState("");
  const [editNote, setEditNote] = useState("");

  const startEdit = (m) => {
    setEditingId(m.id);
    setEditMood(m.mood);
    setEditNote(m.note || "");
  };

  const saveEdit = () => {
    updateMood(editingId, editMood, editNote);
    setEditingId(null);
  };

  return (
    <ul>
      {moods.map((m) => (
        <li key={m.id}>
          {editingId === m.id ? (
            <>
              <select
                value={editMood}
                onChange={(e) => setEditMood(e.target.value)}
              >
                <option value="happy">😀 Happy</option>
                <option value="okay">🙂 Okay</option>
                <option value="sad">😢 Sad</option>
              </select>

              <input
                value={editNote}
                onChange={(e) => setEditNote(e.target.value)}
              />

              <button onClick={saveEdit}>Save</button>
            </>
          ) : (
            <>
              {m.mood} — {m.note}
              <button onClick={() => startEdit(m)}>Edit</button>
              <button onClick={() => deleteMood(m.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
