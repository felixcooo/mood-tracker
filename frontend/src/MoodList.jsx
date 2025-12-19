export default function MoodList({ moods, deleteMood }) {
  return (
    <div>
      <h2>Moods</h2>

      {moods.length === 0 && <p>No moods yet.</p>}

      <ul>
        {moods.map((m) => (
          <li key={m.id}>
            <strong>{m.mood}</strong> — {m.note}

            <button onClick={() => deleteMood(m.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}