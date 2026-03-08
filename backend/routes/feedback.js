const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

// Save feedback
router.post("/", async (req, res) => {

  try {

    console.log("Received feedback:", req.body);

    const feedback = new Feedback({
      name: req.body.name,
      meal: req.body.meal,
      feedback: req.body.feedback,
      comments: req.body.comments
    });

    await feedback.save();

    console.log("Feedback saved to MongoDB");

    res.json({
      message: "Feedback saved successfully"
    });

  } catch (error) {

    console.error("Error saving feedback:", error);

    res.status(500).json({
      message: "Error saving feedback"
    });

  }

});


// Get feedback
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find({});
    res.json(feedbacks);
  } catch (error) {
    console.error("Error fetching feedback:", error);
    res.status(500).json({ message: "Error fetching feedback" });
  }
});

module.exports = router;