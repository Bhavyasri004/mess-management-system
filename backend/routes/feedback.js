const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

// Save feedback
router.post("/", async (req, res) => {
  try {

    const feedback = new Feedback(req.body);
    await feedback.save();

    console.log("Feedback saved:", feedback);

    res.json({ message: "Feedback saved successfully" });

  } catch (error) {

    console.error("Error saving feedback:", error);

    res.status(500).json({ message: "Error saving feedback" });

  }
});


// Get feedback (with filter support)
router.get("/", async (req, res) => {

  try {

    const { filter } = req.query;

    let query = {};

    if (filter === "today") {

      const today = new Date();
      today.setHours(0,0,0,0);

      query = { date: { $gte: today } };

    }

    if (filter === "week") {

      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);

      query = { date: { $gte: weekAgo } };

    }

    const feedbacks = await Feedback.find(query).sort({ date: -1 });

    res.json(feedbacks);

  } catch (error) {

    console.error("Error fetching feedback:", error);

    res.status(500).json({ message: "Error fetching feedback" });

  }

});

module.exports = router;