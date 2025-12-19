import { useEffect, useState } from "react";
import axios from "axios";
import MoodForm from "./MoodForm";
import MoodList from "./MoodList";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [moods, setMoods] = useState([]);

  // READ moods
  useEffect(() => {
    fetchMoods();
  }, []);

  const fetchMoods = async () => {
    const res = await axios.get(API_URL);
    setMoods(res.data);
  };

  // CREATE mood
  const addMood = async (mood, note) => {
    await axios.post(API_URL, { mood, note });
    fetchMoods();
  };

  // DELETE mood
  const deleteMood = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchMoods();
  };

  // UPDATE mood
  const updateMood = async (id, mood, note) => {
    await axios.put(`${API_URL}/${id}`, { mood, note });
    fetchMoods();
  };

  return (
    <div>
      <h1>Mood Tracker</h1>

      <MoodForm addMood={addMood} />

      <MoodList
        moods={moods}
        deleteMood={deleteMood}
        updateMood={updateMood}
      />
    </div>
  );
}

export default App;
