import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js";
import moodRoutes from "./routes/moods.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/moods", moodRoutes);

app.get("/", (req, res) => {
  res.send("Mood Tracker backend is running");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Test DB connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("DB connection error", err);
  } else {
    console.log("DB connected at:", res.rows[0].now);
  }
});