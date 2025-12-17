export default function MoodList({ moods, deleteMood }) {
    return (
      <ul>
        {moods.map((mood) => (
          <li key={mood.id}>
            {mood.mood} — {mood.note}
            <button onClick={() => deleteMood(mood.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
  