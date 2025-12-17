import { useEffect, useState } from "react";
import axios from "axios";
import MoodForm from "./MoodForm";
import MoodList from "./MoodList";

const API_URL = "http://localhost:4000/api/moods";

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

  return (
    <div>
      <h1>Mood Tracker</h1>
      <MoodForm addMood={addMood} />
      <MoodList moods={moods} deleteMood={deleteMood} />
    </div>
  );
}

export default App;
