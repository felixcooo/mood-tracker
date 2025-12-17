import { useState } from "react";

export default function MoodForm({ addMood }) {
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!mood) return;

    addMood(mood, note);
    setMood("");
    setNote("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>How do you feel today?</h2>

      <select value={mood} onChange={(e) => setMood(e.target.value)}>
        <option value="">Select mood</option>
        <option value="happy">😀 Happy</option>
        <option value="okay">🙂 Okay</option>
        <option value="sad">😢 Sad</option>
      </select>

      <br />

      <textarea
        placeholder="Optional note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <br />

      <button type="submit">Save Mood</button>
    </form>
  );
}
