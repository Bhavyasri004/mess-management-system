const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: String,
  meal: String,
  feedback: String,
  comments: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Feedback", feedbackSchema);
