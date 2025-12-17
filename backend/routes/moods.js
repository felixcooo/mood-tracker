import express from "express";
import pool from "../db.js";

const router = express.Router();

// GET all moods
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM moods ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// CREATE a mood
router.post("/", async (req, res) => {
  try {
    const { mood, note } = req.body;

    const result = await pool.query(
      "INSERT INTO moods (mood, note) VALUES ($1, $2) RETURNING *",
      [mood, note]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// UPDATE a mood
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { mood, note } = req.body;

    const result = await pool.query(
      "UPDATE moods SET mood=$1, note=$2 WHERE id=$3 RETURNING *",
      [mood, note, id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// DELETE a mood
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM moods WHERE id = $1", [id]);
    res.json({ message: "Mood deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

export default router;
